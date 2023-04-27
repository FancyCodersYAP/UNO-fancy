import { API_ENDPOINTS } from '../store/constants';
import axios from 'axios';
import { type ResponseData, type SetUserThemeData } from './types';

export const themeService = {
  getUserTheme: async () => {
    try {
      const response = await axios.get<ResponseData>(API_ENDPOINTS.theme);
      return response.data;
    } catch (error) {
      console.log(error, 'Ошибка получения темы с сервера');
      return null;
    }
  },
  setUserTheme: async (data: SetUserThemeData) => {
    try {
      await axios.post<ResponseData>(API_ENDPOINTS.theme, { data });
    } catch (error) {
      console.log(error, 'Ошибка отправки темы на сервер');
    }
  },
};
