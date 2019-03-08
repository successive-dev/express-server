import { Schema, version } from "mongoose";

// export const VersionableSchema = new Schema({
//     // versioanble Schema
// });

export default class VersionableSchema extends Schema {
    constructor(userSchema) {
        const VersionSchema = Object.assign({
            createdAt: {
                Required: true,
                default: new Date(),
                type: Date,
            },
            deletedAt: {
                Required: false,
                type: Boolean,
            },
            originalId: {
                Required: true,
                type: String,
            },
            updatedAt: {
                Required: false,
                type: Date,
            },
        }, userSchema);
        super(VersionSchema);
    }
}
