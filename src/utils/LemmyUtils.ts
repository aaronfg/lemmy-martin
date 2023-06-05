import { IAccount } from '../features/settings/types';
import { log } from '../logging/log';

export class LemmyUtils {
  static isNewAccount = (
    account: IAccount,
    accounts: Set<IAccount>,
  ): boolean => {
    const accountsAsArray = Array.from(accounts);
    const matchingAccounts = accountsAsArray.filter(existingAccount => {
      return (
        existingAccount.instance === account.instance &&
        existingAccount.password === account.password &&
        existingAccount.username === account.username
      );
    });
    return matchingAccounts.length === 0;
  };

  static getUpdatedAccounts = (
    newAccount: IAccount,
    accounts: Set<IAccount>,
  ): IAccount[] => {
    if (!this.isNewAccount(newAccount, accounts)) {
      log.debug('we have this account already, just updating the token...');
      // we have this account already, just update the token
      const accountsAsArray = Array.from(accounts);
      const existingAccounts = accountsAsArray.filter(exAccount => {
        return (
          newAccount.instance === exAccount.instance &&
          newAccount.password === exAccount.password &&
          newAccount.username === exAccount.username
        );
      });

      if (existingAccounts.length === 1) {
        const exAccount = existingAccounts[0];
        exAccount.token = newAccount.token;

        const otherExistingAccounts = accountsAsArray.filter(exAccount => {
          return (
            newAccount.instance != exAccount.instance &&
            newAccount.password != exAccount.password &&
            newAccount.username != exAccount.username
          );
        });

        if (otherExistingAccounts.length === 1) {
          const ourAcc = otherExistingAccounts[0];
          log.debug('found our account!', ourAcc);
          let ind: number | undefined;
          accountsAsArray.forEach((acc, index) => {
            if (acc === ourAcc) {
              ind = index;
              return;
            }
          });
          if (ind !== undefined) {
            ourAcc.token = newAccount.token;
            log.debug('account with updated token:', ourAcc);
            accountsAsArray[ind] = ourAcc;
            log.debug('updated accounts: ', accountsAsArray);
          }

          return accountsAsArray;
        }
      }
    } else {
      log.debug('this is a new account. adding it.');
      accounts.add(newAccount);
      log.debug('updated accounts: ', Array.from(accounts));
    }
    return Array.from(accounts);
  };
}
