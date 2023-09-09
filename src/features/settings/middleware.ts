import { log } from '../../logging/log';
import { AppStartListening } from '../../redux/listenerMiddleware';
import { lemmyApi } from '../lemmy/api';
import { settingsCurrentAccountChanged } from './actions';
import { getSettingsCurrentAccountToken } from './selectors';

/** Adds the listeners related to the `communities` feature */
export const addSettingsListeners = (startListening: AppStartListening) => {
  startListening({
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
            sort: 'Active', // todo - pull the sort from the store
          },
          { forceRefetch: true },
        ),
      );
    },
  });
};
