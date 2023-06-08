import { CommunityView } from 'lemmy-js-client';

export interface ICommunitesState {
  /** Number of the page of results we are querying */
  listPage: number;
}

export interface ICommunityListItem {
  id: string;
  communityView: CommunityView;
  shortDescription: string;
}
