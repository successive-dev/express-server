import { IVersionableModel } from '../versionable/';
export default interface IUserModel extends IVersionableModel {
  _id: string;
  emailId: string;
  name: string;
  password: string;
  role: string;
}
