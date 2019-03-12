import { hash } from "bcrypt";
import { seedUser } from "../../../extraTs/constants";
import VersionableRepository from "../versionable/VersionableRepository";
import { User } from "./UserModel";

class UserRepository extends VersionableRepository {
  constructor() {
    super(User);
  }

  public async createUser(data) {
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

  public async findUserByEmail(email) {
    return await User.findOne({emailid: email, deletedAt: {$exists: false}});
  }

  public async insertSeedUser() {
    let hsh = "";
    try {
      hsh = await hash(process.env.PASSWORD, 10);
    } catch (ex) {
      throw new Error("Could'nt gen hash");
    }
    return await super.create(Object.assign({}, seedUser, {password: hsh}));
  }

}

export default new UserRepository();
