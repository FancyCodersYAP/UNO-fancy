import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import userSlice from './user/userSlice';

const rootReducer = combineReducers({
  USER: userSlice,
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
