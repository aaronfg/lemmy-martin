// import {
//   TypedAddListener,
//   addListener,
//   createListenerMiddleware,
// } from '@reduxjs/toolkit';

// import { log } from '../../logging/log';
// import { AppStartListening } from '../../redux/listenerMiddleware';
// import { AppDispatch, RootState } from '../../redux/store';
// import { LemmyUtils } from '../../utils/LemmyUtils';
// import { communityApi } from '../communities/api';
// import { lemmyLogin } from '../lemmy/actions';
// import { settingsUpdateAccounts } from './actions';
// import { getAccounts, getSettingsCurrentAccountToken } from './selectors';
// import { IAccount } from './types';

// /** Listener middleware related to the `settings` feature */
// export const settingsListenerMiddleware = createListenerMiddleware();

// export const startAppListening =
//   settingsListenerMiddleware.startListening as AppStartListening;

// export const addAppListener = addListener as TypedAddListener<
//   RootState,
//   AppDispatch
// >;

// startAppListening({
//   actionCreator: lemmyLogin.fulfilled,
//   effect: async (action, listenerApi) => {
//     // login was successful. save this account
//     const newAccount: IAccount = {
//       username: action.meta.arg.loginForm.username_or_email,
//       password: action.meta.arg.loginForm.password,
//       instance: action.meta.arg.instanceUrl,
//       token: action.payload.jwt,
//     };

//     const accounts = getAccounts(listenerApi.getState());

//     const updatedAccounts = LemmyUtils.getUpdatedAccounts(newAccount, accounts);
//     listenerApi.dispatch(settingsUpdateAccounts(updatedAccounts));

//     // listenerApi.dispatch(communitiesPageUpdated(1));

//     // if (LemmyUtils.isNewAccount(newAccount, accounts)) {
//     //   log.debug('this is a new account. updating our accounts...');
//     //   const updatedAccounts = LemmyUtils.getUpdatedAccounts(
//     //     newAccount,
//     //     accounts,
//     //   );
//     //   listenerApi.dispatch(settingsUpdateAccounts(updatedAccounts));
//     // } else {
//     //   log.debug('we already have this account.');
//     // }
//   },
// });

// startAppListening({
//   actionCreator: settingsUpdateAccounts,
//   effect: (action, listenerApi) => {
//     const authToken = getSettingsCurrentAccountToken(listenerApi.getState());
//     log.debug('settingsUpdateAccounts listener \tauth: ' + authToken);
//     // re-fetch communities
//     listenerApi.dispatch(
//       communityApi.endpoints.getCommunities.initiate({
//         page: 1,
//         auth: authToken,
//         sort: 'Active',
//       }),
//     );
//   },
// });
