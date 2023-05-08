import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import axios from 'axios';
import { ITopic, ITopicData } from '../types';

export const fetchForumTopicGetById = createAsyncThunk(
  'forum/fetchForumTopicGetById',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.get<ITopic>(`${API_ENDPOINTS.forum}/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, `Не удалось получить топик c id: ${id}`)
      );
    }
  }
);
