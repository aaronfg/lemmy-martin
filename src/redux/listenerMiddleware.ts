// listenerMiddleware.ts
import {
  TypedAddListener,
  TypedStartListening,
  addListener,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { communitiesPageUpdated } from '../features/communities/actions';
import { lemmyLogin } from '../features/lemmy/actions';
import { lemmyApi } from '../features/lemmy/api';
import {
  settingsCurrentAccountChanged,
  settingsUpdateAccounts,
} from '../features/settings/actions';
import {
  getAccounts,
  getSettingsCurrentAccountToken,
} from '../features/settings/selectors';
import { IAccount } from '../features/settings/types';
import { log } from '../logging/log';
import { navigationRef } from '../navigation';
import { LemmyUtils } from '../utils/LemmyUtils';
import type { AppDispatch, RootState } from './store';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

/** Listener middleware related to the `settings` feature */
export const appListenerMiddleware = createListenerMiddleware();

export const startAppListening =
  appListenerMiddleware.startListening as AppStartListening;

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
    listenerApi.dispatch(settingsCurrentAccountChanged(newAccount));
    navigationRef.goBack();
  },
});

startAppListening({
  actionCreator: communitiesPageUpdated,
  effect: async (action, listenerApi) => {
    // grab new communites list data based on the new page
    const authToken = getSettingsCurrentAccountToken(listenerApi.getState());
    log.debug('dispatching page ' + action.payload + '\tauth: ' + authToken);
    listenerApi.dispatch(
      lemmyApi.endpoints.getCommunities.initiate({
        page: action.payload,
        auth: authToken,
        sort: 'Active',
      }),
    );
  },
});

startAppListening({
  actionCreator: settingsCurrentAccountChanged,
  effect: (action, listenerApi) => {
    const authToken = getSettingsCurrentAccountToken(listenerApi.getState());
    log.debug('settingsUpdateAccounts listener \tauth: ' + authToken);
    // re-fetch communities
    listenerApi.dispatch(
      lemmyApi.endpoints.getCommunities.initiate(
        {
          page: 1,
          auth: authToken,
          sort: 'Active',
        },
        { forceRefetch: true },
      ),
    );
  },
});
