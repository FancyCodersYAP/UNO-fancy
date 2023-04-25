import {
  fetchAuthUserGet,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
} from './auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserState } from '../types';
import apiErrorStateHandler from '../../utils/apiErrorStateHandler';
import {
  fetchAvatarChange,
  fetchPassChange,
  fetchProfileChange,
} from './profile/actions';
import { fetchOauthCodePost, fetchOauthServiceIdGet } from './oauth/actions';

export const initialState: UserState = {
  user: null,
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    errorReset(state) {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchAuthUserGet.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.error = '';
          state.user = action.payload;
        }
      )
      .addCase(fetchAuthUserGet.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchAuthUserGet.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          if ('reason' in action.payload) {
            state.user = null;
          } else {
            state.error = action.payload;
          }
        }
      )
      .addCase(fetchProfileChange.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        if (action.payload) state.user = action.payload;
      })
      .addCase(fetchProfileChange.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchProfileChange.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchPassChange.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchAvatarChange.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = '';
          state.user = action.payload;
        }
      )
      .addCase(
        fetchAvatarChange.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      )
      .addCase(fetchLogin.rejected, (state, action: PayloadAction<any>) => {
        state.error = apiErrorStateHandler(action);
        state.isLoading = false;
      })
      .addCase(fetchLogout.rejected, (state, action: PayloadAction<any>) => {
        state.error = apiErrorStateHandler(action);
        state.isLoading = false;
      })
      .addCase(
        fetchRegistration.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchOauthServiceIdGet.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchOauthCodePost.pending,
        (state, action: PayloadAction<any>) => {
          state.isLoading = true;
        }
      )
      .addCase(
        fetchOauthCodePost.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = apiErrorStateHandler(action);
          state.isLoading = false;
        }
      );
  },
});

export const { errorReset } = userSlice.actions;

export default userSlice.reducer;
