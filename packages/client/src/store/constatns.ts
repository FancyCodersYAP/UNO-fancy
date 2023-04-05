import axios from 'axios';

const API_ENDPOINT = 'https://ya-praktikum.tech/api/v2';

axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

export default API_ENDPOINT
