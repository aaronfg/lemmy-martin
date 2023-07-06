import { createReducer } from '@reduxjs/toolkit';
import { lemmyApi } from '../lemmy/api';
import {
  userUIFeedCurrentPostUpdated,
  userUIFeedListingTypeUpdated,
  userUIFeedPageUpdated,
  userUIFeedSortTypeUpdated,
} from './actions';
import { IUserState } from './types';

export const INITIAL_USER_STATE: IUserState = {
  ui: {
    feeds: {
      feedSortType: 'Active',
      type: 'Local',
      page: 1,
    },
  },
};

export const userReducer = createReducer(INITIAL_USER_STATE, builder => {
  builder
    // userUIFeedPageUpdated
    .addCase(userUIFeedPageUpdated, (state, action) => {
      state.ui.feeds.page = action.payload;
    })
    // userUIFeedListingTypeUpdated
    .addCase(userUIFeedListingTypeUpdated, (state, action) => {
      state.ui.feeds.type = action.payload;
    })
    // userUIFeedSortTypeUpdated
    .addCase(userUIFeedSortTypeUpdated, (state, action) => {
      state.ui.feeds.feedSortType = action.payload;
    })
    // userUIFeedCurrentPostUpdated
    .addCase(userUIFeedCurrentPostUpdated, (state, action) => {
      state.ui.feeds.currentPost = action.payload;
    })
    .addMatcher(lemmyApi.endpoints.getPosts.matchFulfilled, state => {
      state.ui.feeds.currentPost = INITIAL_USER_STATE.ui.feeds.currentPost;
    })
    // default
    .addDefaultCase(state => state);
});
