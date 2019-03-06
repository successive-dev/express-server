import * as express from 'express';
import { config } from './config/IConfig';
import trainee from './controllers/trainee/routes';
import * as bodyParser from 'body-parser';
import user from './controllers/user/routes';
const app = express();

export default class Server {
    constructor(public config: config) {
    }

    bootstarp(){
        this.setupRoutes();
        this.initBodyParser();
    }

    initBodyParser(){
        // app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
    }

    setupRoutes(){

        this.initBodyParser();
        app.use('/api/trainee',trainee);
        app.use('/api/user',user);
        app.get("/", (req, res) => {
            res.send("I am root")
        })
    }

    run() {
        try {
            app.listen(this.config.port, () => console.log(`Example app listening on port ${this.config.port}!`))
        } catch (err) {
            console.log(err);
        }
    }
}

