import { PayloadAction } from '@reduxjs/toolkit';
import { IErrorReason } from '../store/types';

const apiErrorStateHandler = (
  action: PayloadAction<string | IErrorReason>
): string =>
  typeof action.payload === 'object' && 'reason' in action.payload
    ? action.payload.reason
    : action.payload;

export default apiErrorStateHandler;
