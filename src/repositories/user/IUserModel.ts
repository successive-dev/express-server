import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableModel';
export default interface IUserModel extends IVersionableModel {
    _id: string;
    emailid: string;
    name: string;
    password: string;
    role: string;
}
