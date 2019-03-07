"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const Database_1 = require("../libs/Database");
const index_1 = require("./controllers/trainee/index");
const index_2 = require("./controllers/user/index");
const app = express();
class Server {
    constructor(config) {
        this.config = config;
    }
    bootstarp() {
        this.setupRoutes();
        this.initBodyParser();
    }
    initBodyParser() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
    setupRoutes() {
        app.use("/api/trainee", index_1.traineeRouter);
        app.use("/api/user", index_2.userRouter);
        app.get("/", (req, res) => {
            res.send("I am root");
        });
    }
    run() {
        const db = new Database_1.default();
        db.open(process.env.MONGO_URL);
        try {
            app.listen(this.config.port, () => {
                // tslint:disable-next-line: no-console
                console.log(`Example app listening on port ${this.config.port}!`);
            });
        }
        catch (err) {
            // tslint:disable-next-line: no-console
            console.log(err);
        }
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map