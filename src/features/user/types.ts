import { ListingType, PostView, SortType } from 'lemmy-js-client';

/** State for the `user` slice of the redux store */
export interface IUserState {
  /** State related to ui */
  ui: IUIState;
}

/** UI state */
export interface IUIState {
  /** UI state for the Feeds screen */
  feeds: IFeedsUI;
}

/** UI state for the Feeds screen */
export interface IFeedsUI {
  /** The sort type for the feed */
  feedSortType: SortType;
  /** For filtering the feed list to just items from subscribed commnites vs all, etc */
  type: ListingType;
  /** Current page of data to show */
  page: number;
  /** The current post the user is looking at */
  currentPost?: PostView;
}
