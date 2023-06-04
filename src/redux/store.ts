import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from '../features/settings';

/** Our redux store */
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type pulled from the store
export type AppDispatch = typeof store.dispatch;
