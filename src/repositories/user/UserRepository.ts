import { Document, model, Model } from "mongoose";
import { seedUser } from "../../../extraTs/constants";
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
    return await super.create(seedUser);
  }
}

export default new UserRepository();
