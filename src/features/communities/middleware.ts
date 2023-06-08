import {
  TypedAddListener,
  addListener,
  createListenerMiddleware,
  isAnyOf,
} from '@reduxjs/toolkit';
import { log } from '../../logging/log';
import { AppStartListening } from '../../redux/listenerMiddleware';
import { AppDispatch, RootState } from '../../redux/store';
import { communitiesPageUpdated, communitiesTest } from './actions';

/** Listener middleware related to the `settings` feature */
export const communitesListenerMiddleware = createListenerMiddleware();

const startAppListening =
  communitesListenerMiddleware.startListening as AppStartListening;

const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

startAppListening({
  matcher: isAnyOf(communitiesPageUpdated),
  effect: async (action, listenerApi) => {
    // grab new communites list data based on the new page
    log.debug('dispatching page ' + action.payload);
    listenerApi.dispatch(communitiesTest());
    // listenerApi.dispatch(
    // communityApi.endpoints.getCommunities.initiate({ page: action.payload });
    // );
  },
});
