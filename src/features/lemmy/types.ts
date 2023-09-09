import { CommentView, Login, LoginResponse } from 'lemmy-js-client';
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

/** Object for a Lemmy instance */
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

/** The error object returned if the {@link features/lemmy/actions!lemmyLogin} action fails */
export interface ILemmyLoginError {
  /** The error message */
  error: string;
}

export interface ILemmyCommentItemData {
  commentView: CommentView;
  rootComment: boolean;
}

/** Object for a comment and its child comments */
export interface IParsedComment {
  commentView: CommentView;
  children: string[];
}

// --- API Params

/** Params for the {@link features/lemmy/actions!lemmyLogin} action */
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
  PasswordIncorrect = 'Error: password_incorrect',
}

/** Error messages for the `lemmy` feature */
export enum LemmyErrorMsgs {
  UserOrPassInvalid = 'There was a problem with your username or password. Please verify them and try again.',
  UnknownError = 'An unknown error occured.',
}

/** Paths for the Lemmy API */
export enum LemmyAPIPaths {
  GetComments = 'comment/list',
  GetPosts = 'post/list',
  ListCommunities = 'community/list',
}

/** Method types for the Lemmy API calls */
export enum LemmyAPIMethods {
  GetComments = 'GET',
  GetPosts = 'GET',
  ListCommunities = 'GET',
}

/** Colors to use on nested list items like comments */
export const LemmyNestedItemColors: string[] = [
  '#307aba',
  '#b82cd1',
  '#fcba03',
  '#28c928',
  '#ba203c',
  '#f8fc0d',
];

/** The path to the current LEmmy aPI */
export const LEMMY_API_PATH = 'api/v3/';

/** Valid sort types */
export const SortTypeValues = [
  'Active',
  'Hot',
  'New',
  'Old',
  'TopDay',
  'TopWeek',
  'TopMonth',
  'TopYear',
  'TopAll',
  'MostComments',
  'NewComments',
  'TopHour',
  'TopSixHour',
  'TopTwelveHour',
] as const;

export type SortTypeValue = (typeof SortTypeValues)[number];
