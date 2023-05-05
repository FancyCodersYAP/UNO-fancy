import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../constants';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { MessageFormParams } from '../../components/AddTopic/AddTopic';
import { ITopicMessage } from '../../pages/ForumTopicPage/TopicMessage';

export const fetchForumMessagePost = createAsyncThunk(
  'forum/fetchForumMessagePost',
  async (data: MessageFormParams, thunkAPI) => {
    try {
      const response: AxiosResponse<ITopicMessage> = await axios.post<any>(
        API_ENDPOINTS.sendMessage,
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось отправить сообщение')
      );
    }
  }
);
