import {
  ILemmyInstance,
  LemmyErrorMsgs,
  LemmyLoginErrors,
} from '../features/lemmy/types';
import { IAccount } from '../features/settings/types';

const COMMUNITY_MAX_DESCRIPTION_LENGTH = 200;

/**
 * Class with utility methods related to Lemmy API and accounts
 */
export class LemmyUtils {
  /**
   * Returns `true` if the `account` passed in is not already present in the
   * Set of `accounts`.
   *
   * This check does not care about the {@link IAccount.token} property of the account
   * as this check is used for updating the account with a new token upon login.
   * @param account - The account to check
   * @param accounts - The existing accounts we have saved in the redux store
   */
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

  /**
   * Will update the `accounts` passed in with the `newAccount` and return the
   * new Set.
   *
   * This is used both when we have a brand new account AND also when we have a
   * new token for an existing account.
   * @param newAccount - The new account
   * @param accounts - The existing accounts we have saved in the redux store
   */
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
      // This is a new account. Just add it
      accounts.add(newAccount);
    }
    return Array.from(accounts);
  };

  /**
   * Returns `true` if the provided `description` is longer than
   * the `COMMUNITY_MAX_DESCRIPTION_LENGTH`.
   *
   * Used in the Communities Screen to truncate the Community
   * description text in the list.
   * @param description - The Community description to test
   */
  static isDescriptionLong = (description: string): boolean => {
    return description.length > COMMUNITY_MAX_DESCRIPTION_LENGTH;
  };

  /**
   * Returns `true` if the `description` has multiple paragraphs.
   *
   * This is used in conjunction with {@link LemmyUtils.getDescriptionFirstParagraph}
   * to get a shorter, list-friendly description.
   * @param description - The Community description to test
   */
  static getDescriptionHasMultiParagraphs = (description: string): boolean => {
    return description.indexOf('\n') !== -1;
  };

  /**
   * Returns the first paragraph of a Community's `description`
   * passed in.
   * @param description - The Community description to test
   */
  static getDescriptionFirstParagraph = (description: string): string => {
    const pIndex = description.indexOf('\n');
    return pIndex !== -1 ? description.substring(0, pIndex) : description;
  };

  /**
   * Truncates the `description` to a shorter manageable length
   * for use in the {@link screens/Communities!CommunitiesScreen} screen
   * @param description - The Community description to truncate
   * @returns
   */
  static getShortDescription = (description: string): string => {
    if (this.getDescriptionHasMultiParagraphs(description)) {
      return this.getDescriptionFirstParagraph(description);
    } else if (this.isDescriptionLong(description)) {
      return description.substring(0, COMMUNITY_MAX_DESCRIPTION_LENGTH) + '...';
    }
    return description;
  };

  /**
   * Creates an {@link features/lemmy/types!ILemmyInstance} from
   * the `instance` string passed in
   * @param instance - The string to base the logic on
   */
  static createILemmyInstance = (instance: string): ILemmyInstance => {
    const instanceUrl = new URL(instance);
    return {
      name: instanceUrl.host,
      href: instanceUrl.href,
    };
  };

  /**
   * Returns a user-friendly error message given the API-provided `error`
   * @param error - The error string to base the frfiendly message on
   */
  static getFriendlyErrorMsg = (error: string): string => {
    let msg: string;

    switch (error) {
      case LemmyLoginErrors.UserOrPassInvalid:
        msg = LemmyErrorMsgs.UserOrPassInvalid;
        break;
      case LemmyLoginErrors.PasswordIncorrect:
        msg = 'Incorrect Password';
        break;
      default:
        msg = error;
    }

    return msg;
  };
}
