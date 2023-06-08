import { nanoid } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { log } from '../../logging/log';
import { RootState } from '../../redux/store';
import { LemmyUtils } from '../../utils/LemmyUtils';
import { communityApi } from './api';
import { ICommunityListItem } from './types';

/** Gets the Communities returned from the {@link communityApi.getCommunities} endpoint */
export const getCommunityAPICommunities = (state: RootState) =>
  communityApi.endpoints.getCommunities.select({})(state).data;

export const getCommunityListItems = createSelector(
  getCommunityAPICommunities,
  comAPI => {
    const items: ICommunityListItem[] = [];
    log.debug('api comms:', comAPI);
    if (comAPI) {
      comAPI.communities.map(comm => {
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
