import { createAsyncThunk } from '@reduxjs/toolkit';
import { LemmyHttp, Login, LoginResponse } from 'lemmy-js-client';
import { log } from '../../logging/log';
import { IError } from '../../types';

export const login = createAsyncThunk<
  LoginResponse,
  Login,
  {
    rejectValue: IError;
  }
>('lemmy/login', async (loginForm: Login, thunkAPI) => {
  //   try {
  const baseUrl = 'https://lemmy.ml';
  const client: LemmyHttp = new LemmyHttp(baseUrl);
  const response = await client.login(loginForm);
  log.debug('response: ', response);
  return response;
  //   } catch (error) {
  //     thunkAPI.rejectWithValue({
  //       message: '',
  //     });
  //   }
});
