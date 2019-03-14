import { NextFunction, Request, Response } from 'express';

export default function notFoundRoute(req: Request, res: Response, next: NextFunction) {
    next({
        error: 'Not Found',
        message: 'Route not found',
        status: 404,
    });
}
