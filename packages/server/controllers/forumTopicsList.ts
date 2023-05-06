import { Sequelize } from 'sequelize-typescript';

import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';
import { Ranks } from '../models/Ranks';

import { topicCollectData } from '../database/topicCollectData';
import { UserRanks } from '../models/UserRanks';

export const forumTopicsList = async () => {
  return await ForumTopic.findAll({
    // offset: 1, //для пагинации
    // limit: 2, //для пагинации
    attributes: topicCollectData,
    include: [
      /**запасной вариант*/
      // {
      //   model: ForumMessage,
      //   attributes: ['content'],
      //   order: [['id', 'ASC']],
      //   where: {
      //     id: {
      //       [Op.in]: Sequelize.literal(
      //         '(SELECT MAX(id) FROM forum_messages GROUP BY topic_id)'
      //       ),
      //     },
      //   },
      // },
      {
        model: User,
        attributes: ['display_name'],
      },
    ],
    order: [[Sequelize.col('last_message_id'), 'DESC']],
    raw: true,
    nest: true,
  });
};

export const topicGetById = async (id: string) => {
  return await ForumTopic.findByPk(id, {
    include: [
      {
        model: ForumMessage,
        attributes: ['id', 'topic_id', 'content', 'created_at'],
        include: [
          {
            model: User,
            attributes: [
              'display_name',
              'avatar',
              [
                Sequelize.literal(`
            (SELECT rank_name FROM "ranks" WHERE ranks.id = (SELECT rank_id FROM "user_ranks" WHERE user_ranks.user_id = "messages->user"."ya_id" ) )
            `),
                'rank',
              ],
            ],
          },
        ],
      },
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
    order: [[Sequelize.col('messages.created_at'), 'ASC']],
  });
};

export const topicPost = async (data: Record<any, any>) => {
  //TODO типизировать data
  const topic = await ForumTopic.create(data);
  return await ForumTopic.findByPk(topic.id, {
    attributes: topicCollectData,
    include: [
      {
        model: User,
        attributes: ['display_name'],
      },
    ],
    order: [[Sequelize.col('last_message_id'), 'DESC']],
    raw: true,
    nest: true,
  });
};

export const topicDel = async (id: string, user_id: string) => {
  const topicData = await ForumTopic.findByPk(id);

  return (
    topicData &&
    (await ForumTopic.destroy({
      where: { id, user_id },
    }))
  );
};
