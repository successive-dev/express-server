"use strict";
exports.__esModule = true;
// import * as express from 'express';
var express = require('express');
var app = express();
// const port = 3000;
// console.log(express);
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
    }
    Server.prototype.bootstarp = function () {
        // return setupRoutes();
    };
    Server.prototype.setupRoutes = function () {
        app.get("/", function (req, res) {
            res.send("Hello World!");
        });
    };
    Server.prototype.run = function () {
        var _this = this;
        app.listen(this.config.port, function () { return console.log("Example app listening on port " + _this.config.port + "!"); });
    };
    return Server;
}());
exports.Server = Server;
