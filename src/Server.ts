import * as bodyParser from "body-parser";
import * as express from "express";
import Database from "../libs/Database";
import seedUser from "../libs/seedData";
import { IConfig } from "./config/IConfig";
import auth from "./controllers/authentication/auth";
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
        app.use("/api/auth", auth);
        app.use("/api/trainee", traineeRouter);
        app.use("/api/user", userRouter);
        app.get("/", (req, res) => {
            res.send("I am root");
        });
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
                        console.log("err", err);
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
