import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiErrorCheck } from '../../utils/apiCheckError';
import { LoginFormParams } from '../../pages/LoginPage/LoginPage';
import { RegFormParams } from '../../pages/RegistrationPage/RegistrationPage';
import { API_ENDPOINT } from '../constatns';

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  login: string;
  phone: string;
  avatar: string;
}

const AUTH_ENDPOINT = `${API_ENDPOINT}/auth`;

axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export const errorMessage = (error: AxiosError | unknown, message: string) => {
  const authCheck = axios.isAxiosError(error) && apiErrorCheck(error.response);
  return authCheck || message;
};

export const fetchAuth = createAsyncThunk(
  'user/fetchAuth',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(`${AUTH_ENDPOINT}/user`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        errorMessage(error, 'Не удалось загрузить пользователя')
      );
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (data: LoginFormParams, { rejectWithValue, dispatch }) => {
    try {
      await axios.post<string>( //пока механика использования в приложении не выработана оставил присвоение
        `${AUTH_ENDPOINT}/signin`,
        data
      );
      return dispatch(fetchAuth());
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);
export const fetchLogout = createAsyncThunk(
  'user/fetchLogout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<string>(`${AUTH_ENDPOINT}/logout`);
      dispatch(fetchAuth());
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);

export const fetchRegistration = createAsyncThunk(
  'user/fetchRegistration',
  async (data: RegFormParams, { rejectWithValue, dispatch }) => {
    try {
      await axios.post<string>(`${AUTH_ENDPOINT}/signup`, data);

      return dispatch(fetchAuth());
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось зарегестрироваться')
      );
    }
  }
);
