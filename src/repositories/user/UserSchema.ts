import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    emailid: String,
    name: String,
    password: String,
    dob: Date
})