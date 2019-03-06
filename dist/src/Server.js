"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./controllers/trainee/routes");
const bodyParser = require("body-parser");
const routes_2 = require("./controllers/user/routes");
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
        // app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
    setupRoutes() {
        this.initBodyParser();
        app.use('/api/trainee', routes_1.default);
        app.use('/api/user', routes_2.default);
        app.get("/", (req, res) => {
            res.send("I am root");
        });
    }
    run() {
        try {
            app.listen(this.config.port, () => console.log(`Example app listening on port ${this.config.port}!`));
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map