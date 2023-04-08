import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginFormParams } from '../../../pages/LoginPage/LoginPage';
import { RegFormParams } from '../../../pages/RegistrationPage/RegistrationPage';
import { IUser } from '../../types';
import { API_ENDPOINTS } from '../../constatns';
import { errorMessage } from '../../../utils/apiErrorMessageCheck';

// const AUTH_ENDPOINT = `${API_MAIN_ENDPOINT}/auth`;

export const fetchAuthUserGet = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(`${API_ENDPOINTS.auth}/user`);

      return response.data;
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
