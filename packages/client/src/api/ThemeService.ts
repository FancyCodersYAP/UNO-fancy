import { API_ENDPOINTS } from '../store/constants';
import axios from 'axios';
import { type responseData, type setUserThemeData } from './types';

export const themeService = {
  getUserTheme: async () => {
    const response = await axios.get<responseData>(API_ENDPOINTS.theme);
    return response.data;
  },
  setUserTheme: (data: setUserThemeData) =>
    axios.post<responseData>(API_ENDPOINTS.theme, { data }),
};
