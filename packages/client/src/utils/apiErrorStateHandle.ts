import { PayloadAction } from '@reduxjs/toolkit';

const apiErrorStateHandle = (action: PayloadAction<any>) => typeof action.payload === 'object' && 'reason' in action.payload
  ? action.payload.reason
  : action.payload;

export default apiErrorStateHandle
