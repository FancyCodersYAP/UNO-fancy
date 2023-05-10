import axios from 'axios';
import { PutLeaderboardData } from './types';
export const REDIRECT_URL = 'http://localhost:3000';

const API_MAIN_ENDPOINT = `${REDIRECT_URL}/api/v2`;

export const API_ENDPOINTS = {
  auth: `${API_MAIN_ENDPOINT}/auth`,
  oauth: `${API_MAIN_ENDPOINT}/oauth/yandex`,
  profile: `${API_MAIN_ENDPOINT}/user`,
  leaderboard: `${API_MAIN_ENDPOINT}/leaderboard`,
  resources: `${API_MAIN_ENDPOINT}/resources`,
  theme: `${REDIRECT_URL}/theme-service`,
  resources: `${API_MAIN_ENDPOINT}/resources`
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
