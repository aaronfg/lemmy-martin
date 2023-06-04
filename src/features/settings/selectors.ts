import { RootState } from '../../redux/store';

export const getSettingsFeedSource = (state: RootState) =>
  state.settings.feed.defaultSource;
