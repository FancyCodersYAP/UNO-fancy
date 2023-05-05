import { Sequelize } from 'sequelize-typescript';
import type { Literal } from 'sequelize/types/utils';

export type TopicDataAttribute = [
  string,
  string,
  [Literal, string],
  [Literal, string],
  [Literal, string]
];

export const topicCollectData: TopicDataAttribute = [
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
];
