import { IAccount } from '../features/settings/types';

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
      // we have this account already, just update the token
      const accountsAsArray = Array.from(accounts);
      const possibleMatches = accountsAsArray.filter(exAccount => {
        return (
          newAccount.instance === exAccount.instance &&
          newAccount.password === exAccount.password &&
          newAccount.username === exAccount.username
        );
      });

      if (possibleMatches.length === 1) {
        const exAccount = possibleMatches[0];
        exAccount.token = newAccount.token;

        const otherExistingAccounts = accountsAsArray.filter(someAccount => {
          return (
            newAccount.instance != someAccount.instance &&
            newAccount.password != someAccount.password &&
            newAccount.username != someAccount.username
          );
        });

        if (otherExistingAccounts.length === 1) {
          console.log('yay it equals 1');
          const ourAcc = otherExistingAccounts[0];
          let ind: number | undefined;
          accountsAsArray.forEach((acc, index) => {
            if (acc === ourAcc) {
              ind = index;
              return;
            }
          });
          if (ind !== undefined) {
            ourAcc.token = newAccount.token;
            accountsAsArray[ind] = ourAcc;
          }

          return accountsAsArray;
        }
      }
    } else {
      accounts.add(newAccount);
    }
    return Array.from(accounts);
  };
}
