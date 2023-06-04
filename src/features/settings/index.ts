import { createReducer } from '@reduxjs/toolkit';
import { FeedSource, ISettingsState } from './types';

export const INITIAL_SETTINGS_STATE: ISettingsState = {
  feed: {
    defaultSource: FeedSource.Local,
  },
};
export const settingsReducer = createReducer(
  INITIAL_SETTINGS_STATE,
  builder => {
    builder.addDefaultCase(state => state);
  },
);
