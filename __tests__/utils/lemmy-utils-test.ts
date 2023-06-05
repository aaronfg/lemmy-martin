import {
  mockTestAccount1,
  mockTestAccount1DifferentToken,
  mockTestAccount2,
  mockTestAccount3,
} from '../../__mocks__/accounts';
import { IAccount } from '../../src/features/settings/types';
import { LemmyUtils } from '../../src/utils/LemmyUtils';

describe('LemmyUtils Tests', () => {
  test('isNewAccount() with new account returns true', () => {
    const accounts: Set<IAccount> = new Set([
      mockTestAccount1,
      mockTestAccount2,
    ]);

    expect(LemmyUtils.isNewAccount(mockTestAccount3, accounts)).toEqual(true);
  });

  test('isNewAccount() with account with different token returns false', () => {
    const accounts: Set<IAccount> = new Set([
      mockTestAccount1,
      mockTestAccount2,
    ]);

    expect(
      LemmyUtils.isNewAccount(mockTestAccount1DifferentToken, accounts),
    ).toEqual(false);
  });
});
