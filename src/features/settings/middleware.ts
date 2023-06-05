import {
  TypedAddListener,
  addListener,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { log } from '../../logging/log';
import { AppStartListening } from '../../redux/listenereMiddleware';
import { AppDispatch, RootState } from '../../redux/store';
import { login } from '../lemmy/actions';
import { settingsAddAccount } from './actions';
import { getAccounts } from './selectors';
import { IAccount } from './types';

export const settingsListenerMiddleware = createListenerMiddleware();

export const startAppListening =
  settingsListenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

startAppListening({
  actionCreator: login.fulfilled,
  effect: async (action, listenerApi) => {
    //
    log.debug('++ settings listener middleware got login fulfilled!');
    log.debug('    action:', action);
    // login was successful. save this account
    const newAccount: IAccount = {
      username: action.meta.arg.loginForm.username_or_email,
      password: action.meta.arg.loginForm.password,
      instance: action.meta.arg.instanceUrl,
      token: action.payload.jwt,
    };

    const accounts = getAccounts(listenerApi.getState());

    if (!accounts.has(newAccount)) {
      log.debug('adding new account:', newAccount);
      listenerApi.dispatch(settingsAddAccount(newAccount));
    }
  },
});
