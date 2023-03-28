import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { user } from './user/user';
import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  USER: user,
  AUTH: authSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
