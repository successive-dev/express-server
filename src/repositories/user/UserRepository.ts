import VersionableRepository from '../versionable/VersionableRepository';
import { User } from './UserModel';

class UserRepository extends VersionableRepository {
  constructor() {
    super(User);
  }

  public async createUser(data) {
    return await super.create(data);
  }

  public async readOneUser(id) {
    return await super.readOne(id);
  }

  public async readUsers() {
    return await super.read();
  }

  public async deleteUser(id) {
    return await super.delete(id);
  }

  public async updateUser(id, dataToUpdate) {
    return await super.update(id, dataToUpdate);
  }

  public async findByQueryUsers(data) {
    return await super.findByQuery(data);
  }
}

export default new UserRepository();
