/**
 * Descriptor for a Lemmy account
 */
export interface IAccount {
  /** The url of the instance this account is on */
  instance: string;
  /** Username / email for the account */
  username: string;
  /** Password for the account */
  password: string;
  /** The jwt token received after a successful login */
  token?: string;
}

/** Descriptor for the `settings` slice of our redux store */
export interface ISettingsState {
  /** Lemmy accounts the user has signed in with */
  accounts: IAccount[];
  /** Currently selected account */
  currentAccount?: IAccount;
  /** Settings for the feed screen / data */
  feed: IFeedSettings;
}

/**
 * Descriptor for the settings related to the feed
 * screen / data.
 */
export interface IFeedSettings {
  /**
   * The source of this feed.
   *
   * This is about whether the feed is pulling from the local instance or
   * all Lemmy instances
   */
  source: FeedSource;
}

/** The source of the feed data (local instance only or all instances) */
export enum FeedSource {
  All = 'All',
  Local = 'Local',
}
