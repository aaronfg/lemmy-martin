import { createAction } from '@reduxjs/toolkit';
import { ListingType, PostView, SortType } from 'lemmy-js-client';

/**
 * Dispatched when the page of results in the Feed has changed.
 * @param pageNumber - The new page number
 */
export const userUIFeedPageUpdated = createAction<number>(
  'user/uiFeedPageUpdated',
);

/**
 * Dispatched when the feed type has changed
 * @param listgingType - The new ListingType in use
 */
export const userUIFeedListingTypeUpdated = createAction<ListingType>(
  'user/uiFeedListingTypeUpdated',
);

/**
 * Dispatched when the sort of the feed has been changed
 * @param sortType - The new SortType for the feed
 */
export const userUIFeedSortTypeUpdated = createAction<SortType>(
  'user/uiFeedSortTypeUpdated',
);

/**
 * Dispatched when the current post on the Feed screen has changed
 * @param postView - The PostView that is now currently selected
 */
export const userUIFeedCurrentPostUpdated = createAction<PostView>(
  'user/uiFeedCurrentPostUpdated',
);
