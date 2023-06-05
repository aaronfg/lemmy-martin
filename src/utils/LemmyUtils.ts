import { IAccount } from '../features/settings/types';

export class LemmyUtils {
  static isNewAccount = (
    account: IAccount,
    accounts: Set<IAccount>,
  ): boolean => {
    return !accounts.has(account);
  };
}
