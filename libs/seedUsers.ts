import { seedUserData, seedUserData1, seedUserData2 } from '../extraTs/constants';
import seedUser from './seedData';

export default async () => {
  await seedUser(seedUserData);
  await seedUser(seedUserData1);
  await seedUser(seedUserData2);
};
