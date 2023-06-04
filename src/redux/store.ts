import { configureStore } from '@reduxjs/toolkit';
import reduxFlipper from 'redux-flipper';
import { settingsReducer } from '../features/settings';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = reduxFlipper;
  middlewares.push(createDebugger());
}

/** Our redux store */
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type pulled from the store
export type AppDispatch = typeof store.dispatch;
