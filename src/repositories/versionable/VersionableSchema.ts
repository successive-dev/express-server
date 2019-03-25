import { Schema } from 'mongoose';

export default class VersionableSchema extends Schema {
  constructor(userSchema) {
    const VersionSchema = Object.assign(
      {
        createdAt: {
          Required: true,
          default: new Date(),
          type: Date,
        },
        deletedAt: {
          Required: false,
          type: Date,
        },
        originalId: {
          Required: true,
          type: String,
        },
        updatedAt: {
          Required: false,
          type: Date,
        },
      },
      userSchema,
    );
    super(VersionSchema);
  }
}
