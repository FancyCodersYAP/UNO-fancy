import express, { type Request, type Response, Router } from 'express';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

import { checkUserAuth } from '../middlewares/checkUserAuth';
import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';

export const forumRoute = Router()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', checkUserAuth)
  .get('/', async (req: Request, res: Response, next) => {
    await ForumTopic.findAll({
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
    })

      .then((topics: ForumTopic[]) => {
        /**для дебага*/
        // topics = JSON.parse(JSON.stringify(topics));
        // console.log(topics);
        res.status(200).json(topics);
      })
      .catch(e => {
        console.log(e);
        res.status(500).json('DB connect error');
      });
  })
  .get('/:id', (req: Request, res: Response, next) => {
    ForumTopic.findByPk(req.params.id, {
      include: [
        {
          model: ForumMessage,
          attributes: ['id', 'topic_id', 'content', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['display_name', 'avatar'],
            },
          ],
        },
        {
          model: User,
          attributes: ['display_name', 'avatar'],
        },
      ],
      order: [[Sequelize.col('messages.created_at'), 'ASC']],
    })
      // .then(throwIf(r => !r, res, 400, 'Тема не найдена'))
      .then(topic => res.status(200).json(topic))
      .catch(() => {
        res.status(500).json('DB connect error');
      });
  })
  .post('/', (req: Request, res: Response, next) => {
    req.body.user_id = res.locals.user.id;
    ForumTopic.create(req.body)
      .then(topic => res.status(201).send({ id: topic.id }))
      .catch(next);
  });
//   .put('/:id', (req: Request, res: Response, next) => {
// ;
//   })
// .delete('/:id', (req: Request, res: Response, next) => {
//
// });
