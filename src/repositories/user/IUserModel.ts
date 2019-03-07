import * as mongoose from "mongoose";

export default interface IUserModel extends mongoose.Document {
    emailid: string;
    name: string;
    password: string;
    dob: Date;
}
