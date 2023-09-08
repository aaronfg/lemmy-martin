import { createReducer, isAnyOf, isRejected } from '@reduxjs/toolkit';
import { lemmyClearError, lemmyLogin } from './actions';
import { lemmyApi } from './api';
import { ILemmyState } from './types';

/** The initial state of the `lemmy` slice of our redux store */
export const INITIAL_LEMMY_STATE: ILemmyState = {
  loading: false,
};

/** Reducer for the `lemmy` slice of our redux store */
export const lemmyReducer = createReducer(INITIAL_LEMMY_STATE, builder => {
  builder
    //   login
    .addCase(lemmyLogin.pending, state => {
      state.loading = true;
      state.loginResponse = undefined;
    })
    .addCase(lemmyLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.loginResponse = action.payload;
    })
    .addCase(lemmyLogin.rejected, (state, action) => {
      state.loading = false;
      state.loginError = action.payload ?? { message: 'Someting went wrong' };
    })
    // lemmyClearError
    .addCase(lemmyClearError, state => {
      state.error = undefined;
    })
    // communities

    .addMatcher(
      isAnyOf(
        lemmyApi.endpoints.getCommunities.matchPending,
        lemmyApi.endpoints.getPosts.matchPending,
      ),
      state => {
        state.error = undefined;
        state.loading = true;
      },
    )
    .addMatcher(
      isAnyOf(
        lemmyApi.endpoints.getCommunities.matchFulfilled,
        lemmyApi.endpoints.getPosts.matchFulfilled,
      ),
      state => {
        state.loading = false;
      },
    )
    .addMatcher(
      lemmyApi.endpoints.getCommunities.matchRejected,
      (state, action) => {
        state.loading = false;
        if (isRejected(action)) {
          state.error = {
            message:
              JSON.stringify(action.payload) ??
              'Failed to get the list of communities.',
            code: action.error.code,
          };
        }
      },
    )
    // Actions that should reset the loading flag
    .addMatcher(
      isAnyOf(
        lemmyLogin.rejected,
        lemmyLogin.fulfilled,
        lemmyApi.endpoints.getComments.matchRejected,
        lemmyApi.endpoints.getPosts.matchRejected,
      ),
      state => {
        state.loading = false;
      },
    )
    // default
    .addDefaultCase(state => state);
});
