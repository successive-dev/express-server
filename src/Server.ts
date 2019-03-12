import * as bodyParser from "body-parser";
import * as express from "express";
import Database from "../libs/Database";
import seedUser from "../libs/seedData";
import { IConfig } from "./config/IConfig";
import { traineeRouter } from "./controllers/trainee/index";
import { userRouter } from "./controllers/user/index";
const app = express();

export default class Server {

    constructor(public config: IConfig) {
    }

    public bootstarp() {
        this.initBodyParser();
        this.setupRoutes();
        this.run();
    }

    public initBodyParser() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }

    public setupRoutes() {
        app.use("/api/trainee", traineeRouter);
        app.use("/api/user", userRouter);
        app.get("/", (req, res) => {
            res.send("I am root");
        });
    }

    public run() {
        try {
            const db = new Database();
            db.open(process.env.MONGO_URL);
            seedUser();
            app.listen(this.config.port, () => {
                // tslint:disable-next-line: no-console
                console.log(`Example app listening on port ${this.config.port}!`);
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}
