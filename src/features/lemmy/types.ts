import { LoginResponse } from 'lemmy-js-client';
import { IError } from '../../types';

export interface ILemmyState {
  error?: IError;
  loading: boolean;
  loginResponse?: LoginResponse;
}

export interface ILoginError {
  error: string;
}

export enum LoginErrors {
  UserOrPassInvalid = 'couldnt_find_that_username_or_email',
}
