import { RootState } from '../../redux/store';

export const getAuthJWT = (state: RootState) => state.settings.login.jwt;

/** Returns the feed source of our `settings` slice */
export const getSettingsFeedSource = (state: RootState) =>
  state.settings.feed.source;
