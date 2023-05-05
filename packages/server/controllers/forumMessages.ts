import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';

export const messageGetByID = async (id: string) => {
  return await ForumMessage.findByPk(id, {
    include: [{ model: ForumTopic }, { model: User }],
  });
};

export const messagePost = async (data: Record<any, any>) => {
  //TODO типизировать data
  return await ForumMessage.create(data, { include: [{ model: User }] });
};
