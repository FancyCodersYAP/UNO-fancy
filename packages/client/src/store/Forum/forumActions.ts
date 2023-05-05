import axios, { AxiosError, AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { TopicFormParams } from '../../components/AddTopic/AddTopic';
import { DataRepository } from '../../api/DataService';
import { ITopicData } from '../types';

export const fetchForumTopicPost = createAsyncThunk(
  'forum/fetchForumTopicPost',
  async (data: TopicFormParams, thunkAPI) => {
    try {
      const response: AxiosResponse<ITopicData> = await axios.post(
        API_ENDPOINTS.forum,
        data
      );
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

export const fetchForumTopicDel = createAsyncThunk(
  'forum/fetchForumTopicDel',
  async (id: string | undefined, thunkAPI) => {
    try {
      const { data } = await axios.delete<Record<any, any>>(
        `${API_ENDPOINTS.forum}/${id}`
      );
      // console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, `Не удалось удалить топик c id: ${id}`)
      );
    }
  }
);
