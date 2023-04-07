import { apiErrorCheck } from './apiCheckError';
import axios, { AxiosError } from 'axios';
import { IApiErrorReason } from './apiCheckError';

export const errorMessage = (
  error: AxiosError | unknown,
  message: string
): IApiErrorReason | unknown => {
  const authCheck = axios.isAxiosError(error) && apiErrorCheck(error.response);
  return authCheck || message;
};
