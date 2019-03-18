import { hash } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import userRepo from '../../repositories/user/UserRepository';

class UserClass {
  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      // tslint:disable-next-line: no-shadowed-variable
      const user = await userRepo.readOneUser(id);
      res.send(user);
    } catch (err) {
      return next({ error: 'Bad Request', status: 400 });
    }
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, skip } = req.query;
      const query = {
        limit,
        skip,
      };
      const users = await userRepo.findUsersByQuery(query);
      users.totalUsers = users.length;
      console.log(users.totalUsers);
      res.send(users);
    } catch (error) {
      return next({ error: error.message, status: 400 });
    }
  }

  public async post(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, emailId, role } = req.body;
      let { password } = req.body;
      password = await hash(password, 10);
      const newUser = await userRepo.createUser({
        emailId,
        name,
        password,
        role,
      });
      res.send(newUser);
    } catch (error) {
      return next({ error: error.message, status: 400 });
    }
  }

  public async put(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, dataToUpdate } = req.body;
      const updatedUser = await userRepo.updateUser(id, dataToUpdate);
      res.send(updatedUser);
    } catch (error) {
      return next({ error: error.message, status: 400 });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deletedUser = await userRepo.deleteUser(id);
      res.send(deletedUser);
    } catch (error) {
      return next({ error: error.message, status: 400 });
    }
  }
}

const user = new UserClass();

export default user;
