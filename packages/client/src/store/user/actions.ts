import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiErrorCheck } from '../../utils/apiCheckError';
import { LoginFormParams } from '../../pages/LoginPage/LoginPage';
import { RegFormParams } from '../../pages/RegistrationPage/RegistrationPage';
import API_ENDPOINT from '../constatns';
import { IUser } from '../types';
import { errorMessage } from '../../utils/apiErrorMessageCheck';
import { userDataSet } from '../auth/authSlice';

const USER_ENDPOINT = `${API_ENDPOINT}/user`;

export const fetchProfileChange = createAsyncThunk(
  'user/fetchProfileChange',
  async (data, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.put<IUser>(`${USER_ENDPOINT}/profile`,
        data
      );
      dispatch(userDataSet(response.data));
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось изменить данные')
      );
    }
  }
);

export const fetchPassChange = createAsyncThunk(
  'user/fetchPassChange',
  async (data: LoginFormParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.put<string>( //пока механика использования в приложении не выработана оставил присвоение
        `${USER_ENDPOINT}/password`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось авторизоваться'));
    }
  }
);
export const fetchLogout = createAsyncThunk(
  'user/fetchLogout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<string>(`${USER_ENDPOINT}/logout`);
      // dispatch(fetchAuth());
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
      await axios.post<string>(`${USER_ENDPOINT}/signup`, data);

      // return dispatch(fetchAuth());
    } catch (error) {
      return rejectWithValue(
        errorMessage(error, 'Не удалось зарегестрироваться')
      );
    }
  }
);
