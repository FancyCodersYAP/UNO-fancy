import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./features/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;