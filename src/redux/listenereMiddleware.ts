// listenerMiddleware.ts
import type { TypedStartListening } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from './store';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

// export const listenerMiddleware = createListenerMiddleware();