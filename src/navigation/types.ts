import { PostView } from 'lemmy-js-client';
import { ScreenNames } from '../types';

export type RootStackParamList = {
  Tabs: undefined;
  Login: undefined;
  [ScreenNames.FeedAndPostView]: undefined;
};

export type FeedAndPostParamList = {
  [ScreenNames.Feed]: undefined;
  [ScreenNames.PostView]: { post: PostView };
};
