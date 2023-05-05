import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForumState, ITopic, ITopicData } from '../types';
import {
  fetchForumTopicPost,
  fetchForumTopicsGet,
  fetchForumTopicGetById,
  fetchForumMessagePost,
  fetchForumTopicDel,
} from './index';

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
      )
      .addCase(
        fetchForumTopicGetById.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = '';
          state.currentTopic = action.payload;
        }
      )
      .addCase(fetchForumTopicGetById.pending, state => {
        state.currentTopic = null;
        state.isLoading = true;
      })
      .addCase(
        fetchForumTopicGetById.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchForumTopicPost.fulfilled, (state, { payload }) => {
        state.forumTopics = [payload, ...state.forumTopics];
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchForumTopicPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchForumTopicPost.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchForumMessagePost.fulfilled, (state, { payload }) => {
        state.currentTopic!.messages = [
          ...state.currentTopic!.messages,
          payload,
        ];
        state.isLoading = false;
        state.error = '';
      })
      .addCase(
        fetchForumMessagePost.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchForumTopicDel.fulfilled, (state, { payload }) => {
        state.forumTopics = state.forumTopics.filter(
          topic => topic.id !== payload.id
        );
        state.isLoading = false;
        state.error = '';
      })
      .addCase(
        fetchForumTopicDel.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { forumErrorReset } = forumSlice.actions;

export default forumSlice.reducer;
