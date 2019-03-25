import { compare } from 'bcrypt';
import * as express from 'express';
import { sign } from 'jsonwebtoken';
import { configuration } from '../../config';
import { UserRepo } from '../../repositories';

const router = express.Router();

router.post('/', async (req, res) => {
  const { emailId, password } = req.body;
  const user = await UserRepo.findByQueryUsers({ emailId });
  if (await compare(password, user[0].password)) {
    const token = sign(
      {
        emailId: user[0].emailId,
        password: user[0].password,
        role: user[0].role,
      },
      configuration.secret,
      { expiresIn: '12h' },
    );
    return res.header('Authorization', token).send(token);
  }
});

export default router;
