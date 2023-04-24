import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLeaderboard } from './actions';
import { useAppSelector } from 'hooks/redux';
import { LeaderboardState } from 'store/types';

const initialState: LeaderboardState = {
  leaderList: [],
  isLoading: false,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLeaderboard.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchLeaderboard.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          state.isLoading = false;
          state.leaderList = payload;
        }
      )
      .addCase(fetchLeaderboard.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const leaderboardList = () => {
  const leaders = useAppSelector(state => state.LEADERBOARD.leaderList);
  return { leaders };
};

export default leaderboardSlice.reducer;
