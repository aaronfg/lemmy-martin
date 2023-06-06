import {
  TypedAddListener,
  addListener,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { AppStartListening } from '../../redux/listenereMiddleware';
import { AppDispatch, RootState } from '../../redux/store';
import { LemmyUtils } from '../../utils/LemmyUtils';
import { lemmyLogin } from '../lemmy/actions';
import { settingsUpdateAccounts } from './actions';
import { getAccounts } from './selectors';
import { IAccount } from './types';

/** Listener middleware related to the `settings` feature */
export const settingsListenerMiddleware = createListenerMiddleware();

export const startAppListening =
  settingsListenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

startAppListening({
  actionCreator: lemmyLogin.fulfilled,
  effect: async (action, listenerApi) => {
    // login was successful. save this account
    const newAccount: IAccount = {
      username: action.meta.arg.loginForm.username_or_email,
      password: action.meta.arg.loginForm.password,
      instance: action.meta.arg.instanceUrl,
      token: action.payload.jwt,
    };

    const accounts = getAccounts(listenerApi.getState());

    const updatedAccounts = LemmyUtils.getUpdatedAccounts(newAccount, accounts);
    listenerApi.dispatch(settingsUpdateAccounts(updatedAccounts));

    // if (LemmyUtils.isNewAccount(newAccount, accounts)) {
    //   log.debug('this is a new account. updating our accounts...');
    //   const updatedAccounts = LemmyUtils.getUpdatedAccounts(
    //     newAccount,
    //     accounts,
    //   );
    //   listenerApi.dispatch(settingsUpdateAccounts(updatedAccounts));
    // } else {
    //   log.debug('we already have this account.');
    // }
  },
});
