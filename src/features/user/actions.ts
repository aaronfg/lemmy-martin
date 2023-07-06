import { createAction } from '@reduxjs/toolkit';
import { ListingType, PostView, SortType } from 'lemmy-js-client';

export const userUIFeedPageUpdated = createAction<number>(
  'user/uiFeedPageUpdated',
);

export const userUIFeedListingTypeUpdated = createAction<ListingType>(
  'user/uiFeedListingTypeUpdated',
);

export const userUIFeedSortTypeUpdated = createAction<SortType>(
  'user/uiFeedSortTypeUpdated',
);

export const userUIFeedCurrentPostUpdated = createAction<PostView>(
  'user/uiFeedCurrentPostUpdated',
);
