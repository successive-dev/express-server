"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {config} from './config/IConfig';
const Server_1 = require("./Server");
require('dotenv').config();
let config = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV
};
config = Object.freeze(config);
const s = new Server_1.Server(config);
s.setupRoutes();
s.run();
//# sourceMappingURL=index.js.map