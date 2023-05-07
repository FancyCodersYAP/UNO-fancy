import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { LeaderListType, PutLeaderboardData } from 'store/types';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { LEADERBOARD_DATA, GET_LEADERBOARD_DATA } from '../constants';

/* add user to leaderboard */
export const fetchUserDataLB = createAsyncThunk(
  'leaderboard/fetchUserData',
  async (data: PutLeaderboardData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_ENDPOINTS.leaderboard}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось отправить юзера на Leaderboard')
      );
    }
  }
);

/* get team leaderboard */
export const fetchLeaderboard = createAsyncThunk(
  'leaderboard/fetchLeaderboard',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post<LeaderListType>(
        `${API_ENDPOINTS.leaderboard}/${LEADERBOARD_DATA.teamName}`,
        GET_LEADERBOARD_DATA
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось получить Leaderboard')
      );
    }
  }
);
