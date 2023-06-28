import { createAction } from '@reduxjs/toolkit';
import { ListingType, SortType } from 'lemmy-js-client';
import { IAccount } from './types';

/**
 * Dsipatched when we update the accounts that have been saved.
 * @param accounts The updated accounts array
 */
export const settingsUpdateAccounts = createAction<IAccount[]>(
  'settings/updateAccounts',
);

export const settingsCurrentAccountChanged = createAction<IAccount>(
  'settings/currentAccountChanged',
);

export const settingsFeedSortUpdated = createAction<SortType>(
  'settings/feedSortUpdated',
);

export const settingsFeedTypeUpdated = createAction<ListingType>(
  'settings/feedTypeUpdated',
);

export const settingsFeedPageUpdated = createAction<number>(
  'settings/feedPageUpdated',
);
