import { Sequelize } from 'sequelize-typescript';

import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';

import { topicCollectData } from '../database/topicCollectData';
import type { Optional } from 'sequelize';

export const forumTopicsList = async () => {
  return await ForumTopic.findAll({
    // offset: 1, //для пагинации если успеем
    // limit: 2,
    attributes: topicCollectData,
    include: [
      /**запасной вариант на финальное демо удалю*/
      /*      {
        model: ForumMessage,
        attributes: ['content'],
        order: [['id', 'ASC']],
        where: {
          id: {
            [Op.in]: Sequelize.literal(
              '(SELECT MAX(id) FROM forum_messages GROUP BY topic_id)'
            ),
          },
        },
      },*/
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
            (SELECT rank_name FROM ranks WHERE ranks.id = "messages->user"."rank_id" )
            `),
                'rank',
              ],
            ],
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
        attributes: [
          'display_name',
          'avatar',
          [
            Sequelize.literal(`
            (SELECT rank_name FROM ranks WHERE ranks.id = "user"."rank_id" )
            `),
            'rank',
          ],
        ],
        // include: [{ model: Ranks }],
      },
    ],
    order: [[Sequelize.col('messages.created_at'), 'ASC']],
  });
};

export const topicPost = async (
  data: Optional<ForumTopic, never> | undefined
) => {
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
