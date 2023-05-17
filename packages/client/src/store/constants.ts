import axios from 'axios';
import { PutLeaderboardData } from './types';

const SERVER_PORT = 3000;
export const REDIRECT_URL = __DEV_MODE__
  ? `http://localhost:${SERVER_PORT}`
  : 'https://uno-fancy.ru/login';

const API_MAIN_ENDPOINT = '/api/v2';

export const API_ENDPOINTS = {
  auth: `${API_MAIN_ENDPOINT}/auth`,
  oauth: `${API_MAIN_ENDPOINT}/oauth/yandex`,
  profile: `${API_MAIN_ENDPOINT}/user`,
  leaderboard: `${API_MAIN_ENDPOINT}/leaderboard`,
  resources: `${API_MAIN_ENDPOINT}/resources`,
  theme: '/theme-service',
  forum: '/api/forum',
  sendMessage: '/api/forum/message',
};
axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export const YANDEX_OAUTH_URL =
  'https://oauth.yandex.ru/authorize?response_type=code';

export const LEADERBOARD_DATA = {
  teamName: 'FancyCoders',
  ratingFieldName: 'total_wins',
  sortingFieldName: 'score',
  cursor: 0,
  limit: 999,
};

export const GET_LEADERBOARD_DATA = {
  ratingFieldName: LEADERBOARD_DATA.sortingFieldName,
  cursor: LEADERBOARD_DATA.cursor,
  limit: LEADERBOARD_DATA.limit,
};

export const PUT_LEADERBOARD_DATA: Omit<PutLeaderboardData, 'data'> = {
  ratingFieldName: LEADERBOARD_DATA.ratingFieldName,
  teamName: LEADERBOARD_DATA.teamName,
};
