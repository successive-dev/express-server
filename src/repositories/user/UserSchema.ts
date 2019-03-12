import { Schema } from "mongoose";
import VersionableSchema from "../versionable/VersionableSchema";
import { User } from "./UserModel";

// const UserSchema = new Schema({

//     dob: {type: Date, required: true},
//     emailid: {type: String, required: true},
//     name: {type: String, required: true},
//     password: {type: String, required: true},

// });

// export default new VersionableSchema(UserSchema, {});

class UserSchema extends VersionableSchema {
    constructor() {
        const baseSchema = {
            _id: { type: String, required: true },
            emailid: { type: String, required: true },
            name: { type: String, required: true },
            password: { type: String, required: true },
        };
        super(baseSchema);
    }
}

export default UserSchema;
