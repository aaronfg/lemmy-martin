import { Middleware, configureStore } from '@reduxjs/toolkit';
import reduxFlipper from 'redux-flipper';
import { communitiesReducer } from '../features/communities';
import { lemmyReducer } from '../features/lemmy';
import { lemmyApi } from '../features/lemmy/api';
import { settingsReducer } from '../features/settings';
import { appListenerMiddleware } from './listenerMiddleware';

const middlewares: Middleware[] = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = reduxFlipper;
  middlewares.push(createDebugger());
}

/** Our redux store */
export const store = configureStore({
  reducer: {
    lemmy: lemmyReducer,
    settings: settingsReducer,
    communites: communitiesReducer,
    [lemmyApi.reducerPath]: lemmyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(appListenerMiddleware.middleware)
      .concat(middlewares)
      .concat(lemmyApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type pulled from the store
export type AppDispatch = typeof store.dispatch;
