import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';

export const forumTopicsList = async () => {
  return await ForumTopic.findAll({
    // offset: 1, //для пагинации
    // limit: 2, //для пагинации
    attributes: [
      'name',
      'id',
      [
        Sequelize.literal(`
             (SELECT Count(*) :: INTEGER
              FROM   forum_messages AS M
              WHERE  M.topic_id = "ForumTopic"."id")
             `),
        'total_messages',
      ],
      [
        Sequelize.literal(`
            (SELECT content FROM "forum_messages" WHERE "id" = (SELECT MAX(id)
             FROM forum_messages AS M
             WHERE  M.topic_id = "ForumTopic"."id"))
            `),
        'last_message',
      ],
      [
        Sequelize.literal(`
            (SELECT id FROM "forum_messages" WHERE "id" = (SELECT MAX(id)
             FROM forum_messages AS M
             WHERE  M.topic_id = "ForumTopic"."id"))
             `),
        'last_message_id',
      ],
    ],
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
            attributes: ['display_name', 'avatar'],
          },
          {
            model: ForumMessage,
            attributes: ['id', 'content'],
            include: [
              {
                model: User,
                attributes: ['display_name'],
              },
            ],
          },
        ],
      },
      {
        model: User,
        attributes: ['display_name', 'avatar'],
      },
    ],
    order: [[Sequelize.col('messages.created_at'), 'ASC']],
  });
};

export const topicPost = async (data: Record<any, any>) => {
  //TODO типизировать data
  return await ForumTopic.create(data);
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
