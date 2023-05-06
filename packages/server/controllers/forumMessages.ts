import type { Optional } from 'sequelize';
import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';
import { Ranks } from '../models/Ranks';
import { Sequelize } from 'sequelize-typescript';

export const messageGetByID = async (id: string) => {
  return await ForumMessage.findByPk(id, {
    include: [
      { model: ForumTopic },
      {
        model: User,
        attributes: [
          'display_name',
          'avatar',
          [
            Sequelize.literal(`
            (SELECT rank_name FROM "ranks" WHERE ranks.id = (SELECT rank_id FROM "user_ranks" WHERE user_ranks.user_id = "user"."ya_id" ) )
            `),
            'rank',
          ],
        ],
      },
    ],
  });
};

export const messagePost = async (
  data: Optional<ForumMessage, never> | undefined
) => {
  return await ForumMessage.create(data);
};
