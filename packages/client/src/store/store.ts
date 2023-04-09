import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './User/userSlice';

const rootReducer = combineReducers({
  USER: userSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
