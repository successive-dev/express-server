import * as supertest from 'supertest';
import { configuration } from '../config';
import Server from '../Server';

const server = new Server(configuration);
server.bootstrap();
const request = supertest(server.app);

describe('GET REQ TESTING', () => {
  it('Get at /', (done) => {
    request
     .get('/')
     .set('Accept', 'application/json')
     .expect('Content-Type', 'application/json; charset=utf-8')
     .expect('Content-Length', '21')
     .expect(200, done);
  });
});
