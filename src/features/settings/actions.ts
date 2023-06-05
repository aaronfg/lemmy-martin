import { createAction } from '@reduxjs/toolkit';
import { IAccount } from './types';

export const settingsAddAccount = createAction<IAccount>('settings/addAccount');

export const updateAccounts = createAction<IAccount[]>(
  'settings/updateAccounts',
);
