import { AppStartListening } from '../../redux/listenerMiddleware';
import { lemmyApi } from '../lemmy/api';
import { getSettingsCurrentAccountToken } from '../settings/selectors';
import { communitiesPageUpdated } from './actions';

/** Adds the listeners related to the `communities` feature */
export const addCommunitesListeners = (startListening: AppStartListening) => {
  startListening({
    actionCreator: communitiesPageUpdated,
    effect: async (action, listenerApi) => {
      // grab new communites list data based on the new page
      const authToken = getSettingsCurrentAccountToken(listenerApi.getState());
      listenerApi.dispatch(
        lemmyApi.endpoints.getCommunities.initiate({
          page: action.payload,
          auth: authToken,
          sort: 'Active',
        }),
      );
    },
  });
};
