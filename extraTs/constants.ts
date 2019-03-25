import { configuration } from '../src/config';

export const permissions = {
  getUsers: {
    all: ['head-trainer'],
    delete: [],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
  },
};

export const seedUserData = {
  emailId: 'DummyEmailId',
  name: 'DummyName',
  password: configuration.password,
  role: 'head-trainer',
};

export const seedUserData1 = {
  emailId: 'tewatiavishal3@gmail.com',
  name: 'Vishal Tewatia',
  password: configuration.password1,
  role: 'trainee',
};

export const seedUserData2 = {
  emailId: 'nishant.naithani@successive.tech',
  name: 'Nishant Naithani',
  password: configuration.password2,
  role: 'trainer',
};
