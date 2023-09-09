import { navigationRef } from '../../navigation';
import { AppStartListening } from '../../redux/listenerMiddleware';
import { LemmyUtils } from '../../utils/LemmyUtils';
import {
  settingsCurrentAccountChanged,
  settingsUpdateAccounts,
} from '../settings/actions';
import { getAccounts } from '../settings/selectors';
import { IAccount } from '../settings/types';
import { lemmyLogin } from './actions';

/** Adds the listeners related to the `lemmy` feature */
export const addLemmyListeners = (startListening: AppStartListening) => {
  // On successful login, save the account in the store
  startListening({
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

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        newAccount,
        accounts,
      );
      listenerApi.dispatch(settingsUpdateAccounts(updatedAccounts));
      listenerApi.dispatch(settingsCurrentAccountChanged(newAccount));
      navigationRef.goBack();
    },
  });
};
