import * as jwt from 'jsonwebtoken';
import { hasPermission } from '../../extraTs';
import { configuration } from '../../src/config';
import { UserRepo } from '../../src/repositories/';

export default (mod, permission) => {
  return async (req, res, next) => {
    const token = req.header('Authorization');
    let user: any = {};

    if (!token) {
      return res.status(401).send('Access denied. No token provided');
    }

    try {
      user = jwt.verify(token, configuration.secret);
    } catch (ex) {
      return next({
        error: 'Access denied',
        message: 'Unauthorized access',
        status: 400,
      });
    }

    const result = await UserRepo.findUsersByQuery({ emailId: user.emailId });
    if (!result) {
      return next({
        error: 'Access denied',
        message: 'Invalid user',
        status: 400,
      });
    }

    if (!hasPermission(mod, user.role, permission)) {
      return next({
        error: 'Access Denied',
        message: `${user.role} does not have ${permission} permission`,
        status: 400,
      });
    }

    next();
  };
};
