import { createAction } from '@reduxjs/toolkit';
import { IAccount } from './types';

/**
 * Dispatched when we update the accounts that have been saved.
 * @param accounts The updated accounts array
 */
export const settingsUpdateAccounts = createAction<IAccount[]>(
  'settings/updateAccounts',
);

/**
 * Dispatched when the current account being used has changed
 * @param account - The account being used
 */
export const settingsCurrentAccountChanged = createAction<IAccount>(
  'settings/currentAccountChanged',
);

/**
 * Dispatched when the page of results in the Feed has changed.
 * @param pageNumber - The new page number
 */
export const settingsFeedPageUpdated = createAction<number>(
  'settings/feedPageUpdated',
);
