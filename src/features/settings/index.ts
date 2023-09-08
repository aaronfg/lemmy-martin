import { createReducer } from '@reduxjs/toolkit';
import {
  settingsCurrentAccountChanged,
  settingsFeedPageUpdated,
  settingsUpdateAccounts,
} from './actions';
import { FeedSource, ISettingsState } from './types';

/** The initial state for the `settings` slice of our redux state */
export const INITIAL_SETTINGS_STATE: ISettingsState = {
  accounts: [],
  feed: {
    source: FeedSource.Local,
    feedSortType: 'Hot',
    type: 'Local',
    page: 1,
  },
  defaultInstance: 'https://sopuli.xyz/', // https://sopuli.xyz
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
        state.feed.page = INITIAL_SETTINGS_STATE.feed.page;
      })
      // settingsFeedPageUpdated
      .addCase(settingsFeedPageUpdated, (state, action) => {
        state.feed.page = action.payload;
      })
      // default
      .addDefaultCase(state => state);
  },
);
