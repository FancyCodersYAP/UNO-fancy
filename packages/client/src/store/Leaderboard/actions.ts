import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { PlayerType } from 'types';
import { LeaderListType } from 'store/types';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { LEADERBOARD_DATA } from '../constants';

/* add user to leaderboard */
export const fetchUserDataLB = createAsyncThunk(
  'leaderboard/fetchUserData',
  async (data: PlayerType, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_ENDPOINTS.leaderboard}`, {
        data: data,
        ratingFieldName: LEADERBOARD_DATA.ratingFieldName,
        teamName: LEADERBOARD_DATA.teamName,
      });
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
        {
          ratingFieldName: LEADERBOARD_DATA.ratingFieldName,
          cursor: LEADERBOARD_DATA.cursor,
          limit: LEADERBOARD_DATA.limit,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось получить Leaderboard')
      );
    }
  }
);
