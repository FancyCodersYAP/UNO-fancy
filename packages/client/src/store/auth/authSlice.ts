import {
  fetchAuthUserGet,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
} from './actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, AuthState } from '../types';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    errorReset(state) {
      state.error = '';
    },
    userDataSet (state, action) {
      state.user = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAuthUserGet.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.error = '';
        authSlice.caseReducers.userDataSet(state, action)
      })
      .addCase(fetchAuthUserGet.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAuthUserGet.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        if ('reason' in action.payload) {
          // state.error = 'Не удалось авторизоавться';
          state.user = null;
        } else state.error = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action: PayloadAction<any>) => {
        state.error =
          typeof action.payload === 'object' && 'reason' in action.payload
            ? action.payload.reason
            : action.payload;
      })
      .addCase(fetchLogout.rejected, (state, action: PayloadAction<any>) => {
        console.log('action', action);
        state.error =
          typeof action.payload === 'object' && 'reason' in action.payload
            ? action.payload.reason
            : action.payload;
      })
      .addCase(
        fetchRegistration.rejected,
        (state, action: PayloadAction<any>) => {
          state.error =
            typeof action.payload === 'object' && 'reason' in action.payload
              ? action.payload.reason
              : action.payload;
        }
      );
  },
});

export const { errorReset, userDataSet } = authSlice.actions;

export default authSlice.reducer;
