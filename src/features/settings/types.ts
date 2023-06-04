import { LoginResponse } from 'lemmy-js-client';

/** Descriptor for the `settings` slice of our redux store */
export interface ISettingsState {
  login: LoginResponse;
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
