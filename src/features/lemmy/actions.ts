import { createAsyncThunk } from '@reduxjs/toolkit';
import { LemmyHttp, LoginResponse } from 'lemmy-js-client';
import { log } from '../../logging/log';
import { IError } from '../../types';
import { ILemmyLoginParams } from './types';

/**
 * Dispatched when a user attempts to log in.
 * @param loginParams - The {@link ILemmyLoginParams} info
 */
export const lemmyLogin = createAsyncThunk<
  LoginResponse,
  ILemmyLoginParams,
  {
    rejectValue: IError;
  }
>('lemmy/login', async (params: ILemmyLoginParams, thunkAPI) => {
  const client: LemmyHttp = new LemmyHttp(params.instanceUrl);
  const response = await client.login(params.loginForm);
  log.debug('response: ', response);
  return response;
});
