import { NextFunction, Request, Response } from 'express';

class Trainee {
    public get(req: Request, res: Response) {
        res.send('Get pinged');
        // console.log(req.query);
    }
    public post(req: Request, res: Response) {
        res.send('Post pinged');
    }
    public put(req: Request, res: Response) {
        res.send('Put pinged');
    }
    public delete(req: Request, res: Response) {
        res.send('Delete pinged');
    }
}

const trainee = new Trainee();

export default trainee;
