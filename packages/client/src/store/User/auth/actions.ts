import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginFormParams } from 'pages/LoginPage/LoginPage';
import { RegFormParams } from 'pages/RegistrationPage/RegistrationPage';
import { API_ENDPOINTS } from '../../constants';
import { errorMessage } from 'utils/apiErrorMessageCheck';
import { DataRepository } from 'api/DataService';

export const fetchAuthUserGet = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkAPI) => {
    try {
      const service = thunkAPI.extra as DataRepository;

      return await service.getCurrentUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось загрузить пользователя')
      );
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (data: LoginFormParams, { rejectWithValue, dispatch }) => {
    try {
      await axios.post<string>( //пока механика использования в приложении не выработана оставил присвоение
        `${API_ENDPOINTS.auth}/signin`,
        data
      );
      return dispatch(fetchAuthUserGet());
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);
export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<string>(`${API_ENDPOINTS.auth}/logout`);
      dispatch(fetchAuthUserGet());
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);

export const fetchRegistration = createAsyncThunk(
  'auth/fetchRegistration',
  async (data: RegFormParams, { rejectWithValue, dispatch }) => {
    try {
      await axios.post<string>(`${API_ENDPOINTS.auth}/signup`, data);

      return dispatch(fetchAuthUserGet());
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось зарегестрироваться')
      );
    }
  }
);
