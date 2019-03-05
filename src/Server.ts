import * as express from 'express';
import { config } from './config/IConfig';
import router from './controllers/trainee/routes';
import * as bodyParser from 'body-parser';
const app = express();

export class Server {
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
        app.use('/api',router)

        app.get("/", (req, res) => {
            res.send("I am OK")
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

