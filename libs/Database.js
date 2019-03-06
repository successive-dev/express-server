"use strict";
exports.__esModule = true;
// require('dotenv').config();
// const url = process.env.MONGO_URL;
var mongoose = require("mongoose");
var seedData_1 = require("./seedData");
var UserModel_1 = require("../src/repositories/user/UserModel");
// import IUser from '../src/repositories/user/IUserModel';
// console.log(url);
var Database = /** @class */ (function () {
    function Database() {
    }
    // url: string;
    // constructor(url:string){
    //     this.url = url;
    // }
    Database.prototype.open = function (url) {
        mongoose.connect(url, { useNewUrlParser: true })
            .then(function () {
            console.log("Connected to DB...");
            seedData_1["default"](UserModel_1.User);
        })["catch"](function (err) { return console.log(err.message); });
        // seedUser(User);
    };
    Database.prototype.disconnect = function () {
        mongoose.disconnect();
    };
    return Database;
}());
var db = new Database();
db.open('mongodb://localhost:27017/express-training');
// db.disconnect();
