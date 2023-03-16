import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiErrorCheck } from '../../utils/apiCheckError';
import { LoginFormParams } from '../../pages/LoginPage/LoginPage';
import { RegFormParams } from '../../pages/RegistrationPage/RegistrationPage';

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

const AUTH_ENDPOINT = `${__APP_ENV__.API_ENDPOINT}/auth`;

export const errorMessage = (error: AxiosError | unknown, message: string) => {
  const authCheck = axios.isAxiosError(error) && apiErrorCheck(error.response);
  return authCheck || message;
};

export const fetchAuth = createAsyncThunk(
  'user/fetchAuth',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(`${AUTH_ENDPOINT}/user`, {
        withCredentials: true,
      });

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
        data,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      return await dispatch(fetchAuth());
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);
export const fetchLogout = createAsyncThunk(
  'user/fetchLogout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<string>(`${AUTH_ENDPOINT}/logout`, _, {
        withCredentials: true,
      });
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
      await axios.post<string>(`${AUTH_ENDPOINT}/signup`, data, {
        withCredentials: true,
      });

      return dispatch(fetchAuth());
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось зарегестрироваться')
      );
    }
  }
);
