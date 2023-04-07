import { PayloadAction } from '@reduxjs/toolkit';

interface IErrorReason {
  reason: string;
}
const apiErrorStateHandle = (
  action: PayloadAction<string | IErrorReason>
): string =>
  typeof action.payload === 'object' && 'reason' in action.payload
    ? action.payload.reason
    : action.payload;

export default apiErrorStateHandle;
