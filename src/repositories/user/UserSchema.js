"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    emailid: String,
    name: String,
    password: String,
    dob: Date
});
