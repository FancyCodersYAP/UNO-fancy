import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForumState } from '../types';
import apiErrorStateHandler from '../../utils/apiErrorStateHandler';
import { fetchForumTopicPost, fetchForumTopicsGet } from './actions';

export const initialState: ForumState = {
  forumTopics: [],
  isLoading: false,
  error: '',
};

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    forumErrorReset(state) {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchForumTopicsGet.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = '';
          state.forumTopics = action.payload;
        }
      )
      .addCase(fetchForumTopicsGet.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchForumTopicsGet.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { forumErrorReset } = forumSlice.actions;

export default forumSlice.reducer;
