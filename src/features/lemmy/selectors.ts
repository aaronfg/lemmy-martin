import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';
import { LemmyUtils } from '../../utils/LemmyUtils';
import {
  getSettingsCurrentAccount,
  getSettingsDefaultInstance,
} from '../settings/selectors';
import { getUserUIFeedCurrentPost } from '../user/selectors';
import { lemmyApi } from './api';
import { LEMMY_API_PATH } from './types';

/**
 * Returns `true` if we're loading data from the API
 * @param state - The redux state
 * @returns
 */
export const getLemmyAPILoading = (state: RootState) => state.lemmy.loading;

/**
 * Returns the Lemmy API token (`jwt`) for our user if there is one.
 * @param state - The redux state
 */
export const getLemmyJWT = (state: RootState) => state.lemmy.loginResponse?.jwt;

/**
 * Returns any error object we have in from the Lemmy API.
 * @param state - The redux state
export const getLemmyAPIError = (state: RootState) => state.lemmy.error;

/**
 * Returns any error object we have in from the Lemmy API related to
 * logging in.
 * @param state - The redux state
 */
export const getLemmyLoginError = (state: RootState) => state.lemmy.loginError;

/**
 * Returns any error object we have related to the Lemmy API.
 * @param state - The redux state
 */
export const getLemmyAPIError = (state: RootState) => state.lemmy.error;

/**
 * Returns the base url for the current instance. If no current instance
 * exists, will return the default instance base url.
 */
export const getLemmyAPIBaseUrl = createSelector(
  getSettingsDefaultInstance,
  getSettingsCurrentAccount,
  (defaultInstance, currentAccount) => {
    const apiUrl = new URL(
      currentAccount ? currentAccount.instance : defaultInstance,
    );
    apiUrl.pathname = LEMMY_API_PATH;
    return apiUrl;
  },
);

/**
 * Returns the raw response returned from the server for the current
 * post's comments
 * @param state - The redux state
 */
export const getLemmyAPICommentsRaw = (state: RootState) => {
  return lemmyApi.endpoints.getComments.select({
    auth: getLemmyJWT(state),
    post_id: getUserUIFeedCurrentPost(state)?.post.id,
    max_depth: 5,
  })(state).data;
};

/**
 * Returns the current post's comments, formatted for use in
 * the list items on the Post view comments list.
 */
export const getLemmyComments = createSelector(
  getLemmyAPICommentsRaw,
  comments => {
    if (comments) {
      console.log('raw comments:', JSON.stringify(comments));
      return LemmyUtils.getParsedComments(comments);
    }
    return [];
  },
);
