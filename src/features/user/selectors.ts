import { RootState } from '../../redux/store';

export const getUserUIFeedSortType = (state: RootState) =>
  state.user.ui.feeds.feedSortType;

export const getUserUIFeedType = (state: RootState) => state.user.ui.feeds.type;

export const getUserUIFeedPage = (state: RootState) => state.user.ui.feeds.page;

export const getUserUIFeedCurrentPost = (state: RootState) =>
  state.user.ui.feeds.currentPost;
