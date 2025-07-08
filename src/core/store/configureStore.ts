/// <reference types="vite/client" />

import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';
import { middleware as apiMiddleware } from 'core/api/api.base';
import { initialUserState } from 'core/entities/user/user.state';

type InitialStoreState = Omit<RootState, 'api'>;
const initialState: InitialStoreState = {
  user: initialUserState,
};

export const getStore = (preloadedState: Partial<RootState> = initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleWares) =>
      getDefaultMiddleWares({ serializableCheck: false }).concat(apiMiddleware),
  });
};

export const store = getStore();

export type AppDispatch = typeof store.dispatch;
