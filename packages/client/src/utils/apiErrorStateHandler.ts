import { PayloadAction } from '@reduxjs/toolkit';
import { IErrorReason } from '../store/types';

const apiErrorStateHandler = (
  action: PayloadAction<string | IErrorReason | unknown>
): string => {
  if (!action.payload) return 'unknown net error';
  return typeof action.payload === 'object' && 'reason' in action.payload
    ? /**не знаю как решить вроде проверил что свойство есть, но пишет что у объекта его может не быть*/
      // @ts-ignore
      action.payload.reason
    : action.payload;
};

export default apiErrorStateHandler;
