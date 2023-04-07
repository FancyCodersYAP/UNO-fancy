import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IServiceId } from '../types';
import API_ENDPOINT from '../constatns';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { fetchAuthUserGet } from '../auth/actions';

const OAUTH_ENDPOINT = `${API_ENDPOINT}/oauth/yandex`;
export const REDIRECT_URL = 'http://localhost:3000/';
export const YANDEX_OAUTH_URL =
  'https://oauth.yandex.ru/authorize?response_type=code';

export const fetchOauthServiceIdGet = createAsyncThunk(
  'oauth/fetchOauthServiceIdGet',
  async (_, thunkAPI) => {
    console.log(111111);
    try {
      const { data } = await axios.get<IServiceId>(
        `${OAUTH_ENDPOINT}/service-id`,
        {
          params: { redirect_uri: REDIRECT_URL },
        }
      );

      const url = new URL(YANDEX_OAUTH_URL);

      url.searchParams.set('client_id', data.service_id);
      url.searchParams.set('redirect_uri', REDIRECT_URL);
      window.location.href = url.href;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось авторизоваться')
      );
    }
  }
);

export const fetchOauthCodePost = createAsyncThunk(
  'oauth/fetchOauthCodePost',
  async (oauthCode: string, { dispatch, rejectWithValue }) => {
    try {
      await axios.post<string>(`${OAUTH_ENDPOINT}`, {
        code: oauthCode,
        redirect_uri: REDIRECT_URL,
      });
      dispatch(fetchAuthUserGet());
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);
