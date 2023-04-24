import axios from 'axios';

const API_MAIN_ENDPOINT = 'https://ya-praktikum.tech/api/v2';

export const API_ENDPOINTS = {
  auth: `${API_MAIN_ENDPOINT}/auth`,
  oauth: `${API_MAIN_ENDPOINT}/oauth/yandex`,
  profile: `${API_MAIN_ENDPOINT}/user`,
  leaderboard: `${API_MAIN_ENDPOINT}/leaderboard`,
};
axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export const REDIRECT_URL = 'http://localhost:3000';

export const YANDEX_OAUTH_URL =
  'https://oauth.yandex.ru/authorize?response_type=code';
