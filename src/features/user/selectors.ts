import { RootState } from '../../redux/store';

/**
 * Returns the current sort type for the Feeds screen
 * @param state The redux state
 */
export const getUserUIFeedSortType = (state: RootState) =>
  state.user.ui.feeds.feedSortType;

/**
 * Returns the current feed list type for the Feeds screen
 * @param state The redux state
 */
export const getUserUIFeedType = (state: RootState) => state.user.ui.feeds.type;

/**
 * Returns the page of paginated data for the Feeds screen
 * @param state The redux state 
 */
export const getUserUIFeedPage = (state: RootState) => state.user.ui.feeds.page;

/**
 * Returns the currently selected post on the Feeds screen
 * @param state The redux state
 */
export const getUserUIFeedCurrentPost = (state: RootState) =>
  state.user.ui.feeds.currentPost;
