import { RootState } from '../../redux/store';

/**
 * Returns `true` if we're loading data from the API
 * @param state
 * @returns
 */
export const getLemmyAPILoading = (state: RootState) => state.lemmy.loading;

/**
 * Returns the Lemmy API token (`jwt`) for our user if there is one.
 * @param state Our redux state
 */
export const getLemmyJWT = (state: RootState) => state.lemmy.loginResponse?.jwt;

export const getLemmyAPIError = (state: RootState) => state.lemmy.error;
