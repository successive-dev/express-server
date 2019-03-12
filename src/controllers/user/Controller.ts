import { hash } from "bcrypt";
import {NextFunction, Request, Response} from "express";
import userRepo from "../../repositories/user/UserRepository";

// import {User} from '../../../src/repositories/user/UserModel';

// Filter out the required data from the request and play with it here only.
class UserClass {
    public async get(req: Request, res: Response) {
// tslint:disable-next-line: no-shadowed-variable
        const user = await userRepo.getUser(req.body.id);
        res.send(user);
    }
    public async post(req: Request, res: Response) {
        const { name, emailid } = req.body;
        let { password } = req.body;
        password = await hash(password, 10);
        const newUser = await userRepo.createUser({
            emailid,
            name,
            password,
        });

        if (!newUser) {
            throw new Error("Failed to create new User");
        }
        res.send(newUser);

    }
    public async put(req: Request, res: Response) {
        const { emailid, name, password } = req.body;
        const updatedUser = await userRepo.updateUser(req.body.id, {emailid, name, password});
        res.send(updatedUser);
    }
    public async delete(req: Request, res: Response) {
        const deletedUser = await userRepo.delUser(req.body.id);
        res.send(deletedUser);
    }
}

const user = new UserClass();

export default user;
