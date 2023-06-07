import { CommunityView } from 'lemmy-js-client';

export interface ICommunityListItem {
  id: string;
  communityView: CommunityView;
}
