"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchema_1 = require("./UserSchema");
const mongoose = require("mongoose");
exports.User = mongoose.model('User', UserSchema_1.UserSchema);
//# sourceMappingURL=UserModel.js.map