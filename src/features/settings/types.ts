export interface ISettingsState {
  feed: IFeedSettings;
}

export interface IFeedSettings {
  defaultSource: FeedSource;
}

export enum FeedSource {
  All = 'All',
  Local = 'Local',
}
