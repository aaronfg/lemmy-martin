import { nanoid } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';
import { LemmyUtils } from '../../utils/LemmyUtils';
import { lemmyApi } from '../lemmy/api';
import { ICommunityListItem } from './types';

/** Returns page the list on the communities screen is on */
export const getCommunitesListPage = (state: RootState) =>
  state.communites.listPage;

/** Gets the Communities returned from the `communityApi.getCommunities` endpoint */
export const getCommunityAPICommunitiesRaw = (state: RootState) =>
  lemmyApi.endpoints.getCommunities.select({})(state).data;

/** Retgurns the communities for the current page of data the user is on  */
const getLemmyAPICommunities = createSelector(
  [(state: RootState) => state, getCommunitesListPage],
  (state, page) => {
    return lemmyApi.endpoints.getCommunities.select({ page })(state).data;
  },
);

/** Returns the Communities we have loaded as an `ICommunityListItem` array */
export const getCommunityListItems = createSelector(
  getLemmyAPICommunities,
  communities => {
    const items: ICommunityListItem[] = [];
    if (communities) {
      communities.map(comm => {
        let shortDescription = '';
        shortDescription = LemmyUtils.getShortDescription(
          comm.community.description ?? '',
        );
        const item: ICommunityListItem = {
          id: nanoid(),
          communityView: comm,
          shortDescription,
        };
        items.push(item);
      });
    }
    return items;
  },
);
