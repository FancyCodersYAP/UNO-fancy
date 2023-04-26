import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { PlayerType } from 'types';
import { LeaderListType } from 'store/types';

const teamName = 'FancyCoders';

/* add user to leaderboard */
export const fetchUserDataLB = createAsyncThunk(
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
  async () => {
    try {
      const response = await axios.post<LeaderListType>(
        `${API_ENDPOINTS.leaderboard}/${teamName}`,
        { ratingFieldName: 'score', cursor: 0, limit: 100 }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
