import { createReducer } from '@reduxjs/toolkit';
import { FeedSource, ISettingsState } from './types';

/** The initial state for the `settings` slice of our redux state */
export const INITIAL_SETTINGS_STATE: ISettingsState = {
  accounts: [],
  feed: {
    source: FeedSource.Local,
  },
};

/** The reducer for the `settiings` slice of our redux state */
export const settingsReducer = createReducer(
  INITIAL_SETTINGS_STATE,
  builder => {
    builder.addDefaultCase(state => state);
  },
);
