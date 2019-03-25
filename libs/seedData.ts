import { hash } from 'bcrypt';
// import { seedUserData } from '../extraTs/constants';
// import { configuration } from '../src/config';
import UserRepo from '../src/repositories/user/UserRepository';

export default async function seedUser(userData) {
  const user = await UserRepo.readUsers();
  if (user.length <= 3) {
    let hashPassword: string;
    try {
      hashPassword = await hash(userData.password, 10);
    } catch (ex) {
      throw new Error("Couldn't generate hash");
    }
    return await UserRepo.createUser(
      Object.assign({}, userData, { password: hashPassword }),
    );
  }
}
