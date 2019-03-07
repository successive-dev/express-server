"use strict";
exports.__esModule = true;
var Server_1 = require("./Server");
require('dotenv').config();
var config = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV
};
var s = new Server_1.Server(config);
s.setupRoutes();
s.run();
