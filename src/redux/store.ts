import { Middleware, configureStore } from '@reduxjs/toolkit';
import reduxFlipper from 'redux-flipper';
import { communityApi } from '../features/communities/api';
import { lemmyReducer } from '../features/lemmy';
import { settingsReducer } from '../features/settings';
import { settingsListenerMiddleware } from '../features/settings/middleware';

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
    [communityApi.reducerPath]: communityApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(settingsListenerMiddleware.middleware)
      .concat(middlewares)
      .concat(communityApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type pulled from the store
export type AppDispatch = typeof store.dispatch;
