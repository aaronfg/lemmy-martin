import { ListingType, PostView, SortType } from 'lemmy-js-client';

export interface IUserState {
  ui: IUIState;
}

export interface IUIState {
  feeds: IFeedsUI;
}

export interface IFeedsUI {
  feedSortType: SortType;
  type: ListingType;
  page: number;
  currentPost?: PostView;
}
