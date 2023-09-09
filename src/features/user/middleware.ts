import { AppStartListening } from '../../redux/listenerMiddleware';
import { LemmyApiTagTypes, lemmyApi } from '../lemmy/api';
import { userUIFeedListingTypeUpdated } from './actions';

/** Adds the listeners related to the `user` feature */
export const addUserListeners = (startListening: AppStartListening) => {
  startListening({
    actionCreator: userUIFeedListingTypeUpdated,
    effect: (action, listenerApi) => {
      listenerApi.dispatch(
        lemmyApi.util.invalidateTags([LemmyApiTagTypes.Posts]),
      );
    },
  });
};
