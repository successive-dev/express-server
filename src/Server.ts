import * as express from 'express';
import { config } from './config/IConfig';

const app = express();



export class Server {
    constructor(public config: config) {
    }

    bootstarp(): any {
        this.setupRoutes();
    }

    setupRoutes(): any {
        app.get("/", (req: any, res: any) => {
            res.send("I am OK")
        })
    }

    run() {
        try{
            app.listen(this.config.port, () => console.log(`Example app listening on port ${this.config.port}!`))
        }catch(err){
            console.log(err);
        }
    }

}