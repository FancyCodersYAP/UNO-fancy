import {
  fetchAuth,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
  IUser,
} from './actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: '',
};

// const dispatch = useDispatch();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    errorClear(state) {
      setTimeout(() => (state.error = ''), 3000);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAuth.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.error = '';
        state.user = action.payload;
      })
      .addCase(fetchAuth.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAuth.rejected, (state, action: PayloadAction<any>) => {
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

export default authSlice.reducer;
