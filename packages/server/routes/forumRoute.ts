import express, { type Request, type Response, Router } from 'express';
import { Sequelize } from 'sequelize-typescript';

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
      ],
      include: [
        /**
         * пока получаю все сообщения
         * TODO нужно модифицировать запрос чтобы получить только одно последнее сообщение
         * */
        {
          model: ForumMessage,
          attributes: ['content', 'created_at'],
        },
        {
          model: User,
          attributes: ['display_name', 'avatar'],
        },
      ],
      order: [[Sequelize.col('messages.created_at'), 'DESC']],
    })
      /**
       * сделал временный then() пока не найду спопсоб поучения одного последнего сообщения*/
      .then(topics => {
        topics = JSON.parse(JSON.stringify(topics));
        topics.forEach(topic => {
          if (topic.messages && topic.messages.length) {
            topic.last_message = topic.messages[0].content;
          }
          delete topic.messages;
        });
        return topics;
      })
      .then((topics: ForumTopic[]) => {
        res.status(200).json(topics);
      })
      .catch(next);
  })
  .get('/:id', (req: Request, res: Response, next) => {
    ForumTopic.findByPk(req.params.id, {
      include: [
        { model: ForumMessage, include: [{ model: User }] },
        { model: User },
      ],
      order: [[Sequelize.col('messages.created_at'), 'ASC']],
    })
      // .then(throwIf(r => !r, res, 400, 'Тема не найдена'))
      .then(topic => res.status(200).json(topic))
      .catch(next);
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
