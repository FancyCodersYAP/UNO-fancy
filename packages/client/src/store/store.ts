import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './User/userSlice';
import { IUser } from './types';
import leaderboardSlice from './Leaderboard/leaderboardSlice';
import forumSlice from './Forum/forumSlice';

const rootReducer = combineReducers({
  USER: userSlice,
  LEADERBOARD: leaderboardSlice,
  FORUM: forumSlice,
});

interface IUserService {
  getCurrentUser(): Promise<IUser>;
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
