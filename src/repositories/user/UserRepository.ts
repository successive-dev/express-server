import { Document, model, Model } from "mongoose";
import VersionableRepository from "../versionable/VersionableRepository";
import IUserModel from "./IUserModel";
import { User } from "./UserModel";
class UserRepository extends VersionableRepository {
  constructor() {
    super(User);
  }

  public async createUser(data) {
    // implementation
    return await super.create(data);

  }

  public async getUser(id) {
    return await super.read(id);
  }

  public async delUser(id) {
    return await super.del(id);
  }

  public async updateUser(id, newdata) {
    return await super.update(id, newdata);
  }

  public async findOneUser() {
    return await User.findOne();
  }

  public async insertSeedUser() {
    return await User.create({
      dob: new Date(),
      emailid: "DummyEmailId",
      name: "DummyName",
      password: "DummyPassword",

    });
  }

  // public async findOneUser() {
  //   this.UserModel.findOne((err, doc) => {
  //     if (err) {
  //       throw new Error();
  //     }
  //     if (!doc) {
  //       this.UserModel.create({
  //         dob, (er) => {
  //         if (er) {
  //           throw new Error();
  //         }
  //       });
  //     }
  //   });
}

export default new UserRepository();
