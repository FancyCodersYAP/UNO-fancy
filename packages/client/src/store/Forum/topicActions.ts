import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import axios from 'axios';

export const fetchForumTopicGetById = createAsyncThunk(
  'forum/fetchForumTopicGetById',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get<Record<any, any>>(
        `${API_ENDPOINTS.forum}/${id}`
      );
      // console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, `Не удалось получить топик c id: ${id}`)
      );
    }
  }
);
