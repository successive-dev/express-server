import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer({
  autoStart: false,
});

export default async () => {
  try {
    await mongod.start();
    console.log('Server up and running');
  } catch (err) {
    throw new Error(err);
  }

  return {
    mongoDBName: 'jest',
    mongoUri: await mongod.getConnectionString(),
  };
};
