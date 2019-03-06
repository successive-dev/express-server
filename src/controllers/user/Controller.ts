import {NextFunction, Request, Response} from 'express';
// import {User} from '../../../src/repositories/user/UserModel';

class UserClass {
    public get(req: Request, res: Response) {
        console.log('User Get Pinged');
    }
    public post(req: Request, res: Response) {
        res.send("Post pinged");
    }
    public put(req: Request, res: Response) {
        res.send("Put pinged");
    } 
    public delete(req: Request, res: Response) {
        res.send("Delete pinged");
    }
}

const user = new UserClass();

export default user;