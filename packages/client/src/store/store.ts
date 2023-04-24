import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './User/userSlice';
import leaderboardSlice from './Leaderboard/leaderboardSlice';

const rootReducer = combineReducers({
  USER: userSlice,
  LEADERBOARD: leaderboardSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
