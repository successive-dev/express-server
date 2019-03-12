import { hash } from "bcrypt";
import {NextFunction, Request, Response} from "express";
import userRepo from "../../repositories/user/UserRepository";

// import {User} from '../../../src/repositories/user/UserModel';

// Filter out the required data from the request and play with it here only.
class UserClass {
    public async getQueryStringParams() {
        // implementation
    }

    public async getById(req: Request, res: Response) {
        const id = req.params.id;
        const user = await userRepo.getUser(id);
        res.send(user);
    }

    public async get(req: Request, res: Response) {
        let { limit, skip } = req.query;
        limit = parseInt(limit, 10);
        skip = parseInt(skip, 10);
        let users = await userRepo.find();
        if (limit + skip <= users.length) {
            users = users.slice(skip, skip + limit);
        } else {
            throw new Error("Limit Skip err");
        }
        // delete users[skip];
        res.send(users);
    }

    public async post(req: Request, res: Response) {
        const { name, emailid, role } = req.body;
        let { password } = req.body;
        password = await hash(password, 10);
        const newUser = await userRepo.createUser({
            emailid,
            name,
            password,
            role,
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
