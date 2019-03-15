import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Database, errorHandler, notFoundRoute, seedUser } from '../libs';
import { IConfig } from './config';
import { auth, traineeRouter, userRouter } from './controllers';
const app = express();

export default class Server {

    constructor(public config: IConfig) {
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public initBodyParser() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }

    public setupRoutes() {
        app.get('/', (_, res) => {
            res.send('I am root');
        });
        app.use('/api/trainee', traineeRouter);
        app.use('/api/user', userRouter);
        app.use('/api/auth', auth);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }

    public async run() {
        try {
            const db = new Database();
            const conn = await db.open(process.env.MONGO_URL);
            if (conn) {
                app.listen(this.config.port, (err) => {
                    // tslint:disable-next-line: no-console
                    if (err) {
                        // tslint:disable-next-line: no-console
                        console.log('err', err);
                    } else {
                        // tslint:disable-next-line: no-console
                        console.log(`Example app listening on port ${this.config.port}!`);
                        seedUser();
                    }
                });
            }

        } catch (err) {
            throw new Error(err);
        }
    }
}
