import { createReducer } from '@reduxjs/toolkit';
import {
  settingsCurrentAccountChanged,
  settingsUpdateAccounts,
} from './actions';
import { FeedSource, ISettingsState } from './types';

/** The initial state for the `settings` slice of our redux state */
export const INITIAL_SETTINGS_STATE: ISettingsState = {
  accounts: [],
  feed: {
    source: FeedSource.Local,
  },
  defaultInstance: 'https://lemmy.ml', // https://sopuli.xyz
  feedSortType: 'Hot',
};

/** The reducer for the `settings` slice of our redux state */
export const settingsReducer = createReducer(
  INITIAL_SETTINGS_STATE,
  builder => {
    builder
      // settingsUpdateAccounts
      .addCase(settingsUpdateAccounts, (state, action) => {
        state.accounts = action.payload;
      })
      // settingsCurrentAccountChanged
      .addCase(settingsCurrentAccountChanged, (state, action) => {
        state.currentAccount = action.payload;
      })
      // default
      .addDefaultCase(state => state);
  },
);
