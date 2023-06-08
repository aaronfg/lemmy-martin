import { createReducer } from '@reduxjs/toolkit';
import { communitiesPageUpdated } from './actions';
import { communityApi } from './api';
import { ICommunitesState } from './types';

export const INITIAL_COMMUNITIES_STATE: ICommunitesState = {
  /** Get the first page of results by default */
  listPage: 1,
};

export const communitiesReducer = createReducer(
  INITIAL_COMMUNITIES_STATE,
  builder => {
    builder
      // communitiesPageUpdated
      .addCase(communitiesPageUpdated, (state, action) => {
        state.listPage = action.payload;
      })
      // communityApi.endpoints.getCommunities pending
      .addMatcher(
        communityApi.endpoints.getCommunities.matchPending,
        (state, action) => {
          state.listPage = action.meta.arg.originalArgs.page ?? state.listPage;
        },
      )
      .addDefaultCase(state => state);
  },
);
