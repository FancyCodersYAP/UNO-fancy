import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { ITopicsForum } from '../types';
import { TopicFormParams } from '../../components/AddTopic/AddTopic';

export const fetchForumMessagePost = createAsyncThunk(
  'forum/fetchForumMessagePost',
  async (data: TopicFormParams, thunkAPI) => {
    try {
      const response = await axios.post<any>(API_ENDPOINTS.sendMessage, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось отправить сообщение')
      );
    }
  }
);
