import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { lemmyLogin } from './actions';
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
      state.loginResponse = action.payload;
    })
    .addCase(lemmyLogin.rejected, (state, action) => {
      state.error = action.payload ?? { message: 'Someting went wrong' };
    })
    // Actions that should reset the loading flag
    .addMatcher(isAnyOf(lemmyLogin.rejected, lemmyLogin.fulfilled), state => {
      state.loading = false;
    })
    // default
    .addDefaultCase(state => state);
});
