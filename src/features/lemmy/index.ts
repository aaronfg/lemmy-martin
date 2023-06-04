import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { login } from './actions';
import { ILemmyState } from './types';

export const INITIAL_LEMMY_STATE: ILemmyState = {
  loading: false,
};

export const lemmyReducer = createReducer(INITIAL_LEMMY_STATE, builder => {
  builder
    //   login
    .addCase(login.pending, state => {
      state.loading = true;
      state.loginResponse = undefined;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loginResponse = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.payload ?? { message: 'Someting went wrong' };
    })
    .addMatcher(isAnyOf(login.rejected, login.fulfilled), state => {
      state.loading = false;
    })
    // default
    .addDefaultCase(state => state);
});
