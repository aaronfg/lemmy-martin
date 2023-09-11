import { CommunityView } from 'lemmy-js-client';

/** State for the `communities` slice of our redux store */
export interface ICommunitesState {
  /** Number of the page of results we are querying */
  listPage: number;
}

/** Descriptor for a Community list item */
export interface ICommunityListItem {
  /** Unique identifier */
  id: string;
  /** The Lemmmy CommunityView for this item */
  communityView: CommunityView;
  /** A shortened description of the community for this item */
  shortDescription: string;
}
