import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './User/userSlice';
import { IUser, UserState } from './types';

const rootReducer = combineReducers({
  USER: userSlice,
});

interface IUserService {
  getCurrentUser(): Promise<IUser>;
}

export interface StoreState {
  user: UserState;
}

export const setupStore = (service: IUserService) => {
  const preloadedState =
    typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined;

  if (typeof window !== 'undefined') {
    delete window?.__PRELOADED_STATE__;
  }
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: service,
        },
      });
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
