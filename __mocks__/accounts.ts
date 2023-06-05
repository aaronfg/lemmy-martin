import { IAccount } from '../../src/features/settings/types';

export const mockTestAccount1: IAccount = {
  username: 'account 1',
  password: 'pass1',
  instance: 'https://someinstance.com',
  token: '12345abcd',
};

export const mockTestAccount2: IAccount = {
  username: 'account 2',
  password: 'pass2',
  instance: 'https://someinstance.com',
  token: 'rewr12345abcd',
};

export const mockTestAccount3: IAccount = {
  username: 'account 3',
  password: 'pass3',
  instance: 'https://someinstance3.com',
  token: 'hjkhjk5656756733',
};

export const mockTestAccount1DifferentToken: IAccount = {
  username: 'account 1',
  password: 'pass1',
  instance: 'https://someinstance.com',
  token: 'asd908lkjwerf98',
};
