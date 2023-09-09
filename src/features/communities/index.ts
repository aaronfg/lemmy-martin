import { createReducer } from '@reduxjs/toolkit';
import { lemmyLogin } from '../lemmy/actions';
import { lemmyApi } from '../lemmy/api';
import { communitiesPageUpdated } from './actions';
import { ICommunitesState } from './types';

/** The initial state for the `communites` slice of our redux store */
export const INITIAL_COMMUNITIES_STATE: ICommunitesState = {
  /** Get the first page of results by default */
  listPage: 1,
};

/** Reducer for the `communities` slice of the redux store */
export const communitiesReducer = createReducer(
  INITIAL_COMMUNITIES_STATE,
  builder => {
    builder
      // communitiesPageUpdated
      .addCase(communitiesPageUpdated, (state, action) => {
        state.listPage = action.payload;
      })
      // lemmyLogin
      .addCase(lemmyLogin.fulfilled, state => {
        state.listPage = INITIAL_COMMUNITIES_STATE.listPage;
      })
      // communityApi.endpoints.getCommunities pending
      .addMatcher(
        lemmyApi.endpoints.getCommunities.matchPending,
        (state, action) => {
          state.listPage = action.meta.arg.originalArgs.page ?? state.listPage;
        },
      )
      .addDefaultCase(state => state);
  },
);
