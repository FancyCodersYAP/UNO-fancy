import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { TopicFormParams } from '../../components/AddTopic/AddTopic';
import { DataRepository } from '../../api/DataService';

export const fetchForumTopicPost = createAsyncThunk(
  'forum/fetchForumTopicPost',
  async (data: TopicFormParams, thunkAPI) => {
    try {
      const response = await axios.post<any>(API_ENDPOINTS.forum, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось отправить тему')
      );
    }
  }
);

export const fetchForumTopicsGet = createAsyncThunk(
  'forum/fetchForumTopicsGet',
  async (_, thunkAPI) => {
    try {
      const service = thunkAPI.extra as DataRepository;

      return await service.getForumTopics();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось получить темы')
      );
    }
  }
);
