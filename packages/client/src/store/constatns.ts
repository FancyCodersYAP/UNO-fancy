import axios from 'axios';
export const REDIRECT_URL = 'http://localhost:3000';

const API_MAIN_ENDPOINT = `${REDIRECT_URL}/api/v2`;

export const API_ENDPOINTS = {
  auth: `${API_MAIN_ENDPOINT}/auth`,
  oauth: `${API_MAIN_ENDPOINT}/oauth/yandex`,
  profile: `${API_MAIN_ENDPOINT}/user`,
};
axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export const YANDEX_OAUTH_URL =
  'https://oauth.yandex.ru/authorize?response_type=code';
