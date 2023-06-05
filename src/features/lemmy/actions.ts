import { createAsyncThunk } from '@reduxjs/toolkit';
import { LemmyHttp, LoginResponse } from 'lemmy-js-client';
import { log } from '../../logging/log';
import { IError } from '../../types';
import { ILoginParams } from './types';

export const login = createAsyncThunk<
  LoginResponse,
  ILoginParams,
  {
    rejectValue: IError;
  }
>('lemmy/login', async (params: ILoginParams, thunkAPI) => {
  //   try {
  const client: LemmyHttp = new LemmyHttp(params.instanceUrl);
  const response = await client.login(params.loginForm);
  log.debug('response: ', response);
  return response;
});

// export const listCommunities = createAsyncThunk('lemmy/listCommunities', async ()=>{
//     const response = await
// })
