import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';
import {
  getSettingsCurrentAccount,
  getSettingsDefaultInstance,
} from '../settings/selectors';
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
