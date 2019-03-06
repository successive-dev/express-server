import { UserSchema } from './UserSchema';
import * as mongoose from 'mongoose';
import IUser from './IUserModel';

export const User = mongoose.model('User',UserSchema); 
