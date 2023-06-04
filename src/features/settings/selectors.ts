import { RootState } from '../../redux/store';

/** Returns the feed source of our `settings` slice */
export const getSettingsFeedSource = (state: RootState) =>
  state.settings.feed.source;
