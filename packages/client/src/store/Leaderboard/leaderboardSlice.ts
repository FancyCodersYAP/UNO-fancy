import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLeaderboard, fetchUserDataLB } from './actions';
import { LeaderboardState } from 'store/types';
import apiErrorStateHandler from 'utils/apiErrorStateHandler';

const initialState: LeaderboardState = {
  leaderList: [],
  isLoading: false,
  error: '',
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
      .addCase(fetchLeaderboard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.leaderList = payload.filter(user => user.data.game_id);
        }
      })
      .addCase(
        fetchLeaderboard.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchUserDataLB.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      );
  },
});

export default leaderboardSlice.reducer;
