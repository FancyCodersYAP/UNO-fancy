import React, { PropsWithChildren } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from 'store/store';
import userSlice from 'store/User/userSlice';
import leaderboardSlice from 'store/Leaderboard/leaderboardSlice';
import forumSlice from 'store/Forum/forumSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        USER: userSlice,
        FORUM: forumSlice,
        LEADERBOARD: leaderboardSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({
    children,
  }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
