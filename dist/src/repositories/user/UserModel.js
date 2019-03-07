"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema_1 = require("./UserSchema");
// interface IUserModel extends mongoose.Document {}
exports.User = mongoose.model("User", UserSchema_1.UserSchema);
//# sourceMappingURL=UserModel.js.map