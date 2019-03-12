// only the model of user is needed to store data into db

// import IUser from '../src/repositories/user/IUserModel';
// import { User } from '../src/repositories/user/UserModel';
import UserRepo from "../src/repositories/user/UserRepository";

export default async function seedUser() {
  const user = await UserRepo.findOneUser();
  if (!user) {
    UserRepo.insertSeedUser();
  }
}
