// listenerMiddleware.ts
import {
  TypedAddListener,
  TypedStartListening,
  addListener,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { addCommunitesListeners } from '../features/communities/middleware';
import { addLemmyListeners } from '../features/lemmy/middleware';
import { addSettingsListeners } from '../features/settings/middleware';
import { addUserListeners } from '../features/user/middleware';
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

/** Add the middleware for the `lemmy` feature */
addLemmyListeners(startAppListening);

/** Add the middleware for the `communites` feature */
addCommunitesListeners(startAppListening);

/** Add the middleware for the `settings` feature */
addSettingsListeners(startAppListening);

/** Add the middleware for the `user` feature */
addUserListeners(startAppListening);
