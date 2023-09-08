import { CommentView, Community } from 'lemmy-js-client';
import {
  ILemmyInstance,
  IParsedComment,
  LemmyErrorMsgs,
  LemmyLoginErrors,
  LemmyNestedItemColors,
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

  static getFormattedNumber = (rawNumber: number): string => {
    const isMillions = rawNumber / 1000000 >= 1;
    const isThousands = rawNumber / 1000 >= 1;
    return isMillions
      ? `${rawNumber / 1000000}M`
      : isThousands
      ? `${rawNumber / 1000}K`
      : rawNumber.toString();
  };

  /**
   * Creates a shortened url from the (possibly) longer `fullUrl`
   * that is passed in
   * @param fullUrl - The URL to shorten
   * @returns The hostname of the url passed in
   */
  static getPostUrlShort = (fullUrl: string): string => {
    const url = new URL(fullUrl);
    return url.hostname;
  };

  /**
   * Returns the community name formatted in different ways if
   * the community is on the same instance as the user or not.
   *
   * **Local Community Example:**
   *
   * `"games"`
   *
   * **Non-Local Community Example:**
   *
   * `"games@some-instance-name.xyz"`

   * @param community - The `Community` to get the name from
   */
  static getPostCommunityForItem = (community: Community): string => {
    if (community.local) {
      return community.name;
    } else {
      const commUrl = new URL(community.actor_id);
      return `${community.name}@${commUrl.hostname}`;
    }
  };

  /**
   * Returns a color to be used as the border color on a comment list
   * item to denote depth.
   * @param commentDepth - The depth of the comment
   */
  static getCommentBorderColor = (commentDepth: number) => {
    const isLast = commentDepth === LemmyNestedItemColors.length;
    const ind = commentDepth === 0 || isLast ? 0 : commentDepth;
    return LemmyNestedItemColors[ind];
  };

  /**
   *
   * @param commentViews
   * @returns
   */
  static getParsedComments = (commentViews: CommentView[]) => {
    const rootComments = this.getRootComments(commentViews);

    // loop through the rootComments. For each, search the original
    // commentViews for any that have the id of a root Comment in
    // their path. If so, add them to the rootComment.children[]
    rootComments.forEach(rpcv => {
      if (rpcv.commentView.counts.child_count > 0) {
        const currentCVId = rpcv.commentView.comment.id;
        // get all the child comments
        const allChildren = commentViews.filter(
          cv =>
            cv !== rpcv.commentView &&
            cv.comment.path.includes(rpcv.commentView.comment.id.toString()),
        );
        console.log(
          `${rpcv.commentView.comment.id} has ${allChildren.length} children`,
        );
        allChildren.forEach((child, index) => {
          console.log('-- child: ' + child.comment.id);
          // slice the path to remove the root currentCVId and this child
          // comment's id
          const pathParts = child.comment.path.split('.');
          const thisChildId = child.comment.id.toString();

          const rid = pathParts.indexOf(currentCVId.toString());
          console.log(`\tindex of the root id (${currentCVId}): ` + rid);
          // pathParts.shift();
          const leftover = pathParts.slice(rid + 1);
          console.log('\tparts after shift:', leftover);
          leftover.pop();
          console.log(
            '\tfinal pathParts after removing root id and this one:',
            leftover,
          );

          if (leftover.length === 0) {
            rpcv.children.push(child.comment.id.toString());
          }
        });
      }
    });

    console.log('final: ', JSON.stringify(rootComments));
    return rootComments;
  };

  static getRootComments = (commentViews: CommentView[]): IParsedComment[] => {
    const rootComments: IParsedComment[] = [];
    commentViews.forEach(cv => {
      const children: string[] = [];
      const parts = cv.comment.path.split('.');
      // remove the "0"
      parts.shift();
      // remove the id for this comment
      const thisCommentID = parts.pop();
      if (parts.length === 0) {
        rootComments.push({
          commentView: cv,
          children: [],
        });
      }
    });
    return rootComments;
  };

  static getParsedCommentsOld = (commentViews: CommentView[]) => {
    const allParsed: IParsedComment[] = [];

    commentViews.forEach(cv => {
      const parts = cv.comment.path.split('.');
      // remove the "0"
      parts.shift();
      // remove the id for parent of all comments
      const rootCommentID = parts.shift();
      const children: string[] = [];
      if (rootCommentID) {
        console.log('rootCommentID:', rootCommentID);
        console.log('leftover parts:', parts);
        // if there are children comment ids left,
        // add them to the children array
        if (parts.length > 0) {
          console.log(
            'adding ' + parts.length + ' child comment ids to ' + rootCommentID,
          );
          children.push(...parts);
          // get the root CommentView
          const rootComment = commentViews.find(val => {
            return val.comment.id.toString() === rootCommentID;
          });
          console.log('rootComment:' + rootComment?.comment.content);
          if (rootComment) {
            // if we don't already have it, add it
            const existing = allParsed.find(pc => {
              return pc.commentView.comment.id === rootComment.comment.id;
            });
            // console.log('exists?' + existing);
            if (existing === undefined) {
              console.log('adding ' + rootComment.comment.id);
              allParsed.push({
                commentView: rootComment,
                children,
              });
            }
          }
        } else {
          // if we don't already have it, add it
          const existing = allParsed.find(pc => {
            return pc.commentView.comment.id === cv.comment.id;
          });
          if (!existing) {
            allParsed.push({
              commentView: cv,
              children,
            });
          }
        }
      }
    });

    console.log('final: ', allParsed);
    return allParsed;
  };
}
