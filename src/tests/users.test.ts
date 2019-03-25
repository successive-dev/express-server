import { connect, disconnect } from 'mongoose';
import * as request from 'supertest';
import { seedUserData } from '../../extraTs';
import { seedUsers } from '../../libs';
import { configuration } from '../config';
import Server from '../Server';
import inMemoryServer from './globalsetup';

const server = new Server(configuration);
server.bootstrap();

let token;
let id;

beforeAll(async () => {
  const { mongoDBName, mongoUri} = await inMemoryServer();
  console.log(mongoDBName, mongoUri);
  await connect(mongoUri, {useNewUrlParser: true} );
  await seedUsers();
  const { emailId, password } = seedUserData;
  token = await request(server.app).post('/api/auth').send({emailId, password});
});
afterAll(async () => {
  disconnect();
});

describe('Get Testing', () => {
  it('should return all users', async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).get('/api/user').set('Authorization', authorization);
    id = res.body[0].originalId;
    // console.log(id);
    expect(res.status).toBe(200);
  });
  it(`should return user with particular id`, async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).get(`/api/user/${id}`).set('Authorization', authorization);
    // console.log(res.body);
    expect(res.status).toBe(200);
  });
  it(`should not return a user with invalid id format`, async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).get(`/api/user/${id}12`).set('Authorization', authorization);
    // console.log(res.body);
    expect(res.status).toBe(400);
  });
});

describe('Post Testing', () => {
  describe('Name validation', () => {
    it('Creates a User with space between name', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      console.log(res.body);
      expect(res.status).toBe(200);
    });
    it('Creates a User without space between name', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'HamidRaza',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      console.log(res.body);
      expect(res.status).toBe(200);
    });
    it('Creates a User with numerals in the name (should fail)', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid1 Raza2',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      console.log(res.body);
      expect(res.status).toBe(400);
    });
  });
  describe('Password validation', () => {
    it('one upper-case, one lower-case, one special-char, min 8 letter, one numeric', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      console.log(res.body);
      expect(res.status).toBe(200);
    });
    it('no upper-case', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'hamid123@12345',
        role: 'trainee',
      });
      console.log(res.body);
      expect(res.status).toBe(400);
    });
  });
});
