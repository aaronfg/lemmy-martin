import { nanoid } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';
import { LemmyUtils } from '../../utils/LemmyUtils';
import { communityApi } from './api';
import { ICommunityListItem } from './types';

export const getCommunitesListPage = (state: RootState) =>
  state.communites.listPage;

/** Gets the Communities returned from the {@link communityApi.getCommunities} endpoint */
export const getCommunityAPICommunitiesRaw = (state: RootState) =>
  communityApi.endpoints.getCommunities.select({})(state).data;

const getCommunityAPICommunities = createSelector(
  [(state: RootState) => state, getCommunitesListPage],
  (state, page) => {
    return communityApi.endpoints.getCommunities.select({ page })(state).data;
  },
);

export const getCommunityListItems = createSelector(
  getCommunityAPICommunities,
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
