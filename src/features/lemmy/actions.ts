import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LemmyHttp, LoginResponse } from 'lemmy-js-client';
import { log } from '../../logging/log';
import { IError } from '../../types';
import { LemmyUtils } from '../../utils/LemmyUtils';
import { ILemmyLoginParams } from './types';

export const lemmyClearError = createAction('lemmy/clearError');

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
  try {
    const response = await client.login(params.loginForm);
    log.debug('lemmyLogin response: ', response);
    return response;
  } catch (error) {
    log.error('login err:', error);

    const errMsg = LemmyUtils.getFriendlyErrorMsg((error as object).toString());
    return thunkAPI.rejectWithValue({
      message: errMsg,
    });
  }
});
