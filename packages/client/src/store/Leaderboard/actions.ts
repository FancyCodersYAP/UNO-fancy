import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constatns';
import { PlayerType } from 'types';
import { LeaderboardRecord } from 'store/types';

const teamName = 'FancyCoders';

/* add user to leaderboard */
export const fetchUserData = createAsyncThunk(
  'leaderboard/fetchUserData',
  async (data: PlayerType) => {
    try {
      const response = await axios.post(`${API_ENDPOINTS.leaderboard}`, {
        data: data,
        ratingFieldName: 'score',
        teamName: teamName,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

/* get team leaderboard */
export const fetchLeaderboard = createAsyncThunk(
  'leaderboard/fetchLeaderboard',
  async (limit: number) => {
    try {
      const response = await axios.post<Array<LeaderboardRecord>>(
        `${API_ENDPOINTS.leaderboard}/${teamName}`,
        { ratingFieldName: 'score', cursor: 0, limit: limit }
      );
      return response.data.filter(user => user.data.id);
    } catch (error) {
      console.error(error);
    }
  }
);
