import { createSlice } from '@reduxjs/toolkit';
import { ForumState } from '../types';
import {
  fetchForumTopicPost,
  fetchForumTopicsGet,
  fetchForumTopicGetById,
  fetchForumMessagePost,
  fetchForumTopicDel,
} from './index';
import apiErrorStateHandler from '../../utils/apiErrorStateHandler';

export const initialState: ForumState = {
  forumTopics: [],
  isLoading: false,
  error: '',
  currentTopic: null,
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
      .addCase(fetchForumTopicsGet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.forumTopics = payload;
      })
      .addCase(fetchForumTopicsGet.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchForumTopicsGet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = apiErrorStateHandler(action);
      })
      .addCase(fetchForumTopicGetById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.currentTopic = payload;
      })
      .addCase(fetchForumTopicGetById.pending, state => {
        state.currentTopic = null;
        state.isLoading = true;
      })
      .addCase(fetchForumTopicGetById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = apiErrorStateHandler(action);
      })
      .addCase(fetchForumTopicPost.fulfilled, (state, { payload }) => {
        state.forumTopics = [payload, ...state.forumTopics];
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchForumTopicPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchForumTopicPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = apiErrorStateHandler(action);
      })
      .addCase(fetchForumMessagePost.fulfilled, (state, { payload }) => {
        if (state.currentTopic) {
          state.currentTopic.messages = [
            ...state.currentTopic.messages,
            payload,
          ];
          state.isLoading = false;
          state.error = '';
        }
      })
      .addCase(fetchForumMessagePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = apiErrorStateHandler(action);
      })
      .addCase(fetchForumTopicDel.fulfilled, (state, { payload }) => {
        state.forumTopics = state.forumTopics.filter(
          topic => topic.id !== payload.id
        );
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchForumTopicDel.rejected, (state, action) => {
        state.isLoading = false;
        state.error = apiErrorStateHandler(action);
      });
  },
});
//forumErrorReset оставил для будущей разработки для снятия ошибки в модальном окне
export const { forumErrorReset } = forumSlice.actions;

export default forumSlice.reducer;
