import { hash } from 'bcrypt';
import { seedUserData } from '../extraTs/constants';
import UserRepo from '../src/repositories/user/UserRepository';

export default async function seedUser() {
  const user = await UserRepo.readUsers();
  if (user.length === 0) {
    let hashPassword: string;
    try {
      hashPassword = await hash(process.env.PASSWORD, 10);
    } catch (ex) {
      throw new Error("Couldn't generate hash");
    }
    return await UserRepo.createUser(
      Object.assign({}, seedUserData, { password: hashPassword }),
    );
  }
}
