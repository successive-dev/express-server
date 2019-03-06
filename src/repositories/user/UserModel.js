"use strict";
exports.__esModule = true;
var UserSchema_1 = require("./UserSchema");
var mongoose = require("mongoose");
exports.User = mongoose.model('User', UserSchema_1.UserSchema);
