import { Login, LoginResponse } from 'lemmy-js-client';
import { IError } from '../../types';

/** The descriptor for the `lemmy` slice of our redux store */
export interface ILemmyState {
  /** Error object for any of the API interactions */
  error?: IError;
  loginError?: IError;
  /** `true` if we're loading/sending data */
  loading: boolean;
  /** The response from a successful login */
  loginResponse?: LoginResponse;
}

export interface ILemmyInstance {
  /**
   * The instance name not formatted as a url. ie `'lemmy.ml'`
   */
  name: string;
  /**
   * The instance formatted as a url. ie `'https://lemmy.ml'`
   */
  href: string;
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

// ---- API Responses

export interface ILemmyLoginErrorResponse {
  error: string;
}

/** Error messages related to logging in */
export enum LemmyLoginErrors {
  /** A possible response if the user/pass is wrong. */
  UserOrPassInvalid = 'Error: couldnt_find_that_username_or_email',
}

export enum LemmyErrorMsgs {
  UserOrPassInvalid = 'There was a problem with your username or password. Please verify them and try again.',
  UnknownError = 'An unknown error occured.',
}

export enum LemmyAPIPaths {
  ListCommunities = '/community/list',
}
export enum LemmyAPIMethods {
  ListCommunities = 'GET',
}
export const LEMMY_API_PATH = 'api/v3/';
