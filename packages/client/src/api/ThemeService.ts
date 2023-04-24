import { API_ENDPOINTS } from '../store/constants';
import axios from 'axios';
import { type responseData, type setUserThemeData } from './types';

export const themeService = {
  getUserTheme: async () => {
    try {
      const response = await axios.get<responseData>(API_ENDPOINTS.theme);
      return response.data;
    } catch (error) {
      console.log(error, 'Ошбка получения темы с сервера');
      return 'light';
    }
  },
  setUserTheme: async (data: setUserThemeData) => {
    try {
      await axios.post<responseData>(API_ENDPOINTS.theme, { data });
    } catch (error) {
      console.log(error, 'Ошбка отправки темы на сервер');
    }
  },
};
