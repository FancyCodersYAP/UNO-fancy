import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../../constants';
import { IUser } from '../../types';
import { errorMessage } from '../../../utils/apiErrorMessageCheck';
import { DataType } from '../../../components/Form/Form';

export const fetchProfileChange = createAsyncThunk(
  'profile/fetchProfileChange',
  async (data: DataType, { rejectWithValue }) => {
    try {
      const response = await axios.put<IUser>(
        `${API_ENDPOINTS.profile}/profile`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось изменить данные'));
    }
  }
);

export const fetchPassChange = createAsyncThunk(
  'profile/fetchPassChange',
  async (data: DataType, { rejectWithValue }) => {
    try {
      const response = await axios.put<string>( //пока механика использования в приложении не выработана оставил присвоение
        `${API_ENDPOINTS.profile}/password`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось сменить пароль'));
    }
  }
);

export const fetchAvatarChange = createAsyncThunk(
  'profile/fetchAvatarChange',
  async (data: FormData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.put<string>(
        `${API_ENDPOINTS.profile}/profile/avatar`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error, 'Не удалось поменять аватар'));
    }
  }
);
