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
            let { limit, skip } = req.query;
            limit = parseInt(limit, 10);
            skip = parseInt(skip, 10);
            let users = await userRepo.readUsers();
            if (limit + skip <= users.length) {
                users = users.slice(skip, skip + limit);
            } else {
                throw new Error('Limit Skip err');
            }
            // delete users[skip];
            res.send(users);
        } catch (error) {
            return next({ error: error.message, status: 400 });
        }
    }

    public async post(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, emailid, role } = req.body;
            let { password } = req.body;
            password = await hash(password, 10);
            const newUser = await userRepo.createUser({
                emailid,
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
