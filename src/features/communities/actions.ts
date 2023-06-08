import { createAction } from '@reduxjs/toolkit';

export const communitiesPageUpdated = createAction<number>(
  'communities/PageUpdated',
);

export const communitiesTest = createAction('communities/testAction');
