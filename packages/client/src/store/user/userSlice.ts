import {
  fetchProfileChange,
} from './actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, DefaultState } from '../types';

const initialState: DefaultState = {
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(fetchProfileChange.fulfilled, (state, action: PayloadAction<IUser>) => {
      //   state.isLoading = false;
      //   state.error = '';
      //   console.log(action);
      //   userDataSet(action)
      // })
      .addCase(fetchProfileChange.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProfileChange.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;

      })
      // .addCase(fetchLogin.rejected, (state, action: PayloadAction<any>) => {
      //   state.error =
      //     typeof action.payload === 'object' && 'reason' in action.payload
      //       ? action.payload.reason
      //       : action.payload;
      // })
      // .addCase(fetchLogout.rejected, (state, action: PayloadAction<any>) => {
      //   console.log('action', action);
      //   state.error =
      //     typeof action.payload === 'object' && 'reason' in action.payload
      //       ? action.payload.reason
      //       : action.payload;
      // })
      // .addCase(
      //   fetchRegistration.rejected,
      //   (state, action: PayloadAction<any>) => {
      //     state.error =
      //       typeof action.payload === 'object' && 'reason' in action.payload
      //         ? action.payload.reason
      //         : action.payload;
      //   }
      // );
  },
});

// export const { errorReset } = authSlice.actions;

export default userSlice.reducer;
