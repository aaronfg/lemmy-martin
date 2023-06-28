import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';
import { LemmyUtils } from '../../utils/LemmyUtils';
import { ILemmyInstance } from '../lemmy/types';

/** Returns the accounts in our `settings` slice */
const getSettingsAccounts = (state: RootState) => state.settings.accounts;

/** Returns the currently selected account (if there is one) */
export const getSettingsCurrentAccount = (state: RootState) =>
  state.settings.currentAccount;

export const getSettingsCurrentAccountToken = (state: RootState) =>
  state.settings.currentAccount?.token;

/** Returns the feed source of our `settings` slice */
export const getSettingsFeedSource = (state: RootState) =>
  state.settings.feed.source;

export const getSettingsFeedSortType = (state: RootState) =>
  state.settings.feed.feedSortType;

export const getSettingsFeedType = (state: RootState) =>
  state.settings.feed.type;

export const getSettingsFeedPage = (state: RootState) =>
  state.settings.feed.page;

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

export const getCurrentInstance = createSelector(
  getSettingsCurrentAccount,
  getSettingsDefaultInstance,
  (currentAccount, defaultInstance): ILemmyInstance => {
    const accountInstance = currentAccount?.instance;
    if (accountInstance) {
      const inst = LemmyUtils.createILemmyInstance(accountInstance);
      return inst;
    }
    return LemmyUtils.createILemmyInstance(defaultInstance);
  },
);
