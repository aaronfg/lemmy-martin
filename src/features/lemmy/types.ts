import { Login, LoginResponse } from 'lemmy-js-client';
import { IError } from '../../types';

/** The descriptor for the `lemmy` slice of our redux store */
export interface ILemmyState {
  /** Error object for any of the API interactions */
  error?: IError;
  /** `true` if we're loading/sending data */
  loading: boolean;
  /** The response from a successful login */
  loginResponse?: LoginResponse;
}

/** The error object returned if the {@link lemmyLogin} action fails */
export interface ILemmyLoginError {
  /** The error message */
  error: string;
}

/** Params for the {@link lemmyLogin} action */
export interface ILemmyLoginParams {
  /** The param for the login api call */
  loginForm: Login;
  /** The url of the instance this login is for */
  instanceUrl: string;
}

/** Error messages related to logging in */
export enum LoginErrors {
  /** A possible response if the user/pass is wrong. */
  UserOrPassInvalid = 'couldnt_find_that_username_or_email',
}
