import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';

export const fetchForumTopicPost = createAsyncThunk(
  'forum/fetchForumTopicPost',
  async (data, thunkAPI) => {
    try {
      return await axios.post<Record<any, any>>(API_ENDPOINTS.forum, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось отправить тему')
      );
    }
  }
);
