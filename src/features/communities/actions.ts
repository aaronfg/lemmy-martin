import { createAction } from '@reduxjs/toolkit';

/** Dispatched when the Communities list page we are loading changes  */
export const communitiesPageUpdated = createAction<number>(
  'communities/PageUpdated',
);
