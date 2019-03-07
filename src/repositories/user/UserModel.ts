import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
import { UserSchema } from "./UserSchema";

// interface IUserModel extends mongoose.Document {}

export const User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>("User", UserSchema );
