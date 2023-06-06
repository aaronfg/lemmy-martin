import { createAction } from '@reduxjs/toolkit';
import { IAccount } from './types';

/**
 * Dsipatched when we update the accounts that have been saved.
 * @param accounts The updated accounts array
 */
export const settingsUpdateAccounts = createAction<IAccount[]>(
  'settings/updateAccounts',
);
