import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    dob: Date,
    emailid: String,
    name: String,
    password: String,
});
