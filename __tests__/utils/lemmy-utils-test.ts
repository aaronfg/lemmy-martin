import {
  mockTestAccount1,
  mockTestAccount1DifferentToken,
  mockTestAccount2,
  mockTestAccount3,
} from '../../__mocks__/accounts';
import { IAccount } from '../../src/features/settings/types';
import { LemmyUtils } from '../../src/utils/LemmyUtils';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('LemmyUtils Tests', () => {
  describe('isNewAccount()', () => {
    test('isNewAccount() with new account returns true', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      expect(LemmyUtils.isNewAccount(mockTestAccount3, accounts)).toEqual(true);
    });

    test('isNewAccount() with existing account with different token returns false', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      expect(
        LemmyUtils.isNewAccount(mockTestAccount1DifferentToken, accounts),
      ).toEqual(false);
    });

    test('isNewAccount() with existing account returns false', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      expect(LemmyUtils.isNewAccount(mockTestAccount2, accounts)).toEqual(
        false,
      );
    });
  });

  describe('getUpdatedAccounts()', () => {
    test('getUpdatedAccounts() with new account returns new array', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        {
          instance: 'asdasd',
          password: 'ddd',
          token: '23434234',
          username: 'asdlkjdaklsdjakld',
        },
        accounts,
      );

      expect(updatedAccounts.length).toEqual(3);
      //   expect(updatedAccounts).toMatchInlineSnapshot(`
      //     [
      //       {
      //         "instance": "https://someinstance.com",
      //         "password": "pass1",
      //         "token": "12345abcd",
      //         "username": "account 1",
      //       },
      //       {
      //         "instance": "https://someinstance.com",
      //         "password": "pass2",
      //         "token": "rewr12345abcd",
      //         "username": "account 2",
      //       },
      //       {
      //         "instance": "https://someinstance3.com",
      //         "password": "pass3",
      //         "token": "hjkhjk5656756733",
      //         "username": "account 3",
      //       },
      //     ]
      //   `);
    });

    test('getUpdatedAccounts() with same account returns existing array', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        mockTestAccount1,
        accounts,
      );

      expect(updatedAccounts).toEqual(Array.from(accounts));
    });

    test('getUpdatedAccounts() with same account with different token returns updated array', () => {
      const accountsArray = [
        mockTestAccount1,
        mockTestAccount2,
        mockTestAccount3,
      ];
      const accounts: Set<IAccount> = new Set(accountsArray);

      const originalToken = accountsArray[0].token;

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        mockTestAccount1DifferentToken,
        accounts,
      );

      const newToken = updatedAccounts[0].token;

      expect(originalToken === newToken).toEqual(false);
      expect(newToken).toEqual(mockTestAccount1DifferentToken.token);
    });
  });
});
