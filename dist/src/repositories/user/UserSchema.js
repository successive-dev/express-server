"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    emailid: String,
    name: String,
    password: String,
    dob: Date
});
//# sourceMappingURL=UserSchema.js.map