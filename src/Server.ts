import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Database, errorHandler, notFoundRoute, seedUser } from '../libs';
import { IConfig } from './config';
import { auth, traineeRouter, userRouter } from './controllers';

export default class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  public setupRoutes() {
    this.app.get('/', (_, res) => {
      res.send('I am root');
    });
    this.app.use('/api/trainee', traineeRouter);
    this.app.use('/api/user', userRouter);
    this.app.use('/api/auth', auth);
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public async run() {
    try {
      const db = new Database();
      const conn = await db.open(this.config.mongo_url);
      if (conn) {
        this.app.listen(this.config.port, (err) => {
          if (err) {
            console.log('err', err);
          } else {
            console.log(`Example app listening on port ${this.config.port}!`);
            seedUser();
          }
        });
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
