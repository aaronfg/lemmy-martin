import { createAction } from '@reduxjs/toolkit';
import { IAccount } from './types';

export const settingsUpdateAccounts = createAction<IAccount[]>(
  'settings/updateAccounts',
);
