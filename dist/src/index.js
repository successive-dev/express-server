"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {config} from './config/IConfig';
const Server_1 = require("./Server");
const Database_1 = require("../libs/Database");
require('dotenv').config();
let config = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV
};
config = Object.freeze(config);
const db = new Database_1.default();
db.open(process.env.MONGO_URL);
const s = new Server_1.default(config);
s.setupRoutes();
s.run();
//# sourceMappingURL=index.js.map