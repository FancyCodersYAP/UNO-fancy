import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IServiceId } from '../../types';
import { API_ENDPOINTS, REDIRECT_URL, YANDEX_OAUTH_URL } from '../../constatns';
import { errorMessage } from '../../../utils/apiErrorMessageCheck';
import { fetchAuthUserGet } from '../auth/actions';

export const fetchOauthServiceIdGet = createAsyncThunk(
  'oauth/fetchOauthServiceIdGet',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IServiceId>(
        `${API_ENDPOINTS.oauth}/service-id`,
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
      await axios.post<string>(API_ENDPOINTS.oauth, {
        code: oauthCode,
        redirect_uri: REDIRECT_URL,
      });
      dispatch(fetchAuthUserGet());
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Ошибка авторизации'));
    }
  }
);
