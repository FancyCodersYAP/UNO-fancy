import { apiErrorCheck } from './apiCheckError';
import axios, { AxiosError } from 'axios';

export const errorMessage = (error: AxiosError | unknown, message: string) => {
  const authCheck = axios.isAxiosError(error) && apiErrorCheck(error.response);
  return authCheck || message;
};
