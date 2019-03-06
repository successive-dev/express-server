"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// require('dotenv').config();
// const url = process.env.MONGO_URL;
const mongoose = require("mongoose");
const seedData_1 = require("./seedData");
const UserModel_1 = require("../src/repositories/user/UserModel");
// import IUser from '../src/repositories/user/IUserModel';
// console.log(url);
class Database {
    open(url) {
        mongoose.connect(url, { useNewUrlParser: true })
            .then(() => console.log("Connected to DB..."))
            .catch(err => console.log(err.message));
        seedData_1.default(UserModel_1.User);
    }
    disconnect() {
        mongoose.disconnect();
    }
}
exports.default = Database;
// db.disconnect();
//# sourceMappingURL=Database.js.map