import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';

/** Returns the accounts in our `settings` slice */
const getSettingsAccounts = (state: RootState) => state.settings.accounts;

/** Returns the currently selected account (if there is one) */
export const getSettingsCurrentAccount = (state: RootState) =>
  state.settings.currentAccount;

/** Returns the feed source of our `settings` slice */
export const getSettingsFeedSource = (state: RootState) =>
  state.settings.feed.source;

export const getSettingsDefaultInstance = (state: RootState) =>
  state.settings.defaultInstance;

/** Returns the saved accounts as a Set */
export const getAccounts = createSelector(
  getSettingsAccounts,
  settingsAccounts => {
    const accountsSet = new Set(settingsAccounts);
    return accountsSet;
  },
);
