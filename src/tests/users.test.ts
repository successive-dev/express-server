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
  it(`should return user with particular ID`, async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).get(`/api/user/${id}`).set('Authorization', authorization);
    // console.log(res.body);
    expect(res.status).toBe(200);
  });
  it(`should not return a user with invalid ID format`, async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).get(`/api/user/${id}12`).set('Authorization', authorization);
    // console.log(res.body);
    expect(res.status).toBe(400);
  });
});

describe('Post Testing', () => {
  describe('Name validation', () => {
    it('Passing empty string as name', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: '',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('Creates a User with space between name', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      // console.log(res.body);
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
      // console.log(res.body);
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
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
  });
  describe('Password validation', () => {
    it('Passing empty string as password', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: '',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('one upper-case, one lower-case, one special-char, min 8 letter, one numeric', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'Hamid123@12345',
        role: 'trainee',
      });
      // console.log(res.body);
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
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('no lower-case', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'HAMID123@12345',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('no numerals', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'HAMIDasdsd@sassa',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('no special chars', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'HAMIDasdsdsassa',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('less than 8 length', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive.tech',
        name: 'Hamid Raza',
        password: 'AMIDh@8',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
  });

  describe('Email Validation', () => {
    it('Passing empty string as email', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: '',
        name: 'Hamid Raza',
        password: 'HAMIDhamid@122#',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('Invalid Email format(hamid.razasuccessive.tech) ', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.razasuccessive.tech',
        name: 'Hamid Raza',
        password: 'HAMIDh@8',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('Invalid Email format(hamid.raza@successive) ', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: 'hamid.raza@successive',
        name: 'Hamid Raza',
        password: 'HAMIDh@8',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
    it('Invalid Email format(@successive.tech) ', async () => {
      const { header: { authorization } } = token;
      const res = await request(server.app).post('/api/user').set('Authorization', authorization).send({
        emailId: '@successive.tech',
        name: 'Hamid Raza',
        password: 'HAMIDh@8',
        role: 'trainee',
      });
      // console.log(res.body);
      expect(res.status).toBe(400);
    });
  });
});

describe('Put Testing', () => {
  it('Valid put req', async () => {
    const dataToUpdate = {
      emailId: 'mohdraza@successive.tech',
      name: 'Mohd Hamid Raza',
      password: 'HAMIDh@8',
      role: 'trainee',
    };
    const { header: { authorization } } = token;
    const res = await request(server.app).put('/api/user').set('Authorization', authorization).send({
      dataToUpdate,
      id,
    });
    const result = await request(server.app).get(`/api/user/${id}`).set('Authorization', authorization);

    // compare result and dataToUpdate
    Object.keys(dataToUpdate).forEach((key) => {
      if (dataToUpdate[key] !== result.body[key]) {
        throw new Error('Update Failed');
      }
    });

    expect(res.status).toBe(200);
  });
  it('should not update as dataToUpdate is empty', async () => {
    const dataToUpdate = {};
    const { header: { authorization } } = token;
    const res = await request(server.app).put('/api/user').set('Authorization', authorization).send({
      dataToUpdate,
      id,
    });
    expect(res.status).toBe(400);
  });
  it('should not update as id is empty', async () => {
    const dataToUpdate = {
      emailId: 'mohdraza@successive.tech',
      name: 'Mohd Hamid Raza',
      password: 'HAMIDh@8',
      role: 'trainee',
    };
    const { header: { authorization } } = token;
    const res = await request(server.app).put('/api/user').set('Authorization', authorization).send({
      dataToUpdate,
      id: '',
    });
    expect(res.status).toBe(400);
  });
});

describe('Delete Testing', () => {
  it('Delete with invalid ID', async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).delete(`/api/user/${id}a`).set('Authorization', authorization);
    expect(res.status).toBe(400);
  });
  it('Delete with valid ID', async () => {
    const { header: { authorization } } = token;
    const res = await request(server.app).delete(`/api/user/${id}`).set('Authorization', authorization);
    expect(res.status).toBe(200);
  });
});
