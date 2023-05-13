import { ITopicMessage } from '../pages/ForumTopicPage/TopicMessage';

import { PlayerType } from 'types';

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  login: string;
  phone: string;
  avatar: string;
  status?: null;
}

export interface UserState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

export interface IServiceId {
  service_id: string;
}

export interface IErrorReason {
  reason: string;
  [key: string]: string;
}

export interface ForumState {
  forumTopics: ITopicsForum;
  isLoading: boolean;
  error: string;
  currentTopic: ITopic | null;
}

export interface ITopic {
  id: number;
  name: string;
  description: string;
  created_at: string;
  messages: ITopicMessage[] | [];
  user: IUserForum;
}

export interface IUserForum {
  rank: string;
  display_name: string;
  avatar?: string;
}

export type ITopicsForum = ITopicData[] | [];

export interface ITopicData {
  id: number;
  name: string;
  total_messages: number;
  user: IUserForum;
  last_message: string | null;
}

export interface ITopicDelData {
  id: number;
}

export type LeaderboardRecord = { data: PlayerType };
export type LeaderListType = Array<LeaderboardRecord>;

export type LeaderboardState = {
  isLoading: boolean;
  leaderList: LeaderListType;
  error: string;
};

export type PutLeaderboardData = {
  data: PlayerType;
  ratingFieldName: string;
  teamName: string;
};
