import { createReducer } from '@reduxjs/toolkit';
import { settingsUpdateAccounts } from './actions';
import { FeedSource, ISettingsState } from './types';

/** The initial state for the `settings` slice of our redux state */
export const INITIAL_SETTINGS_STATE: ISettingsState = {
  accounts: [],
  feed: {
    source: FeedSource.Local,
  },
  defaultInstance: 'https://lemmy.ml/',
};

/** The reducer for the `settings` slice of our redux state */
export const settingsReducer = createReducer(
  INITIAL_SETTINGS_STATE,
  builder => {
    builder
      .addCase(settingsUpdateAccounts, (state, action) => {
        state.accounts = action.payload;
      })
      .addDefaultCase(state => state);
  },
);
