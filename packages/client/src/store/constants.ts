import axios from 'axios';
export const REDIRECT_URL = 'http://localhost:3000';

const API_MAIN_ENDPOINT = `${REDIRECT_URL}/api/v2`;

export const API_ENDPOINTS = {
  auth: `${API_MAIN_ENDPOINT}/auth`,
  oauth: `${API_MAIN_ENDPOINT}/oauth/yandex`,
  profile: `${API_MAIN_ENDPOINT}/user`,
  leaderboard: `${API_MAIN_ENDPOINT}/leaderboard`,
  resources: `${API_MAIN_ENDPOINT}/resources`,
  theme: `${REDIRECT_URL}/theme-service`,
  forum: `${REDIRECT_URL}/api/forum`,
};
axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export const YANDEX_OAUTH_URL =
  'https://oauth.yandex.ru/authorize?response_type=code';
