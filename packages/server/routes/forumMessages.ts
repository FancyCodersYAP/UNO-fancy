import express, { type Request, type Response, Router } from 'express';

import { checkUserAuth } from '../middlewares/checkUserAuth';
import { ForumMessage } from '../models/ForumMessage';
import { ForumTopic } from '../models/ForumTopic';
import { User } from '../models/User';
import { messageGetByID, messagePost } from '../controllers/forumMessages';

export const forumMessages = Router()
  .use(express.json())
  .use('/', checkUserAuth)
  .get('/:id', (req: Request, res: Response, next) => {
    messageGetByID(req.params.id)
      .then(message => res.status(200).json(message))
      .catch(next);
  })
  .post('/', (req: Request, res: Response, next) => {
    req.body.user_id = res.locals.user.id;
    messagePost(req.body)
      .then(message => messageGetByID(message.id))
      .then(message => res.status(200).json(message))
      .catch(next);
  })
  .put('/:id', (req: Request, res: Response, next) => {
    console.log(1111);
    // ForumMessage.update(req.body, {
    //   where: { id: req.params.id, user_id: res.locals.user.id },
    //   returning: true,
    // })
    //   .then(result => {
    //     const [count, messages] = result;
    //     if (count === 0) {
    //       throw Error('Сообщение не найдено');
    //     }
    //     ForumMessage.findByPk(messages[0].id, {
    //       include: [{ model: ForumTopic }, { model: User }],
    //     })
    //       .then(message => res.status(200).json(message))
    //       .catch(next);
    //   })
    //   .catch(next);
    res.status(200).json('ok');
  })
  .delete('/:id', (req: Request, res: Response, next) => {
    ForumMessage.destroy({
      where: { id: req.params.id, user_id: res.locals.user.id },
    })
      .then(() => res.status(201).send({ message: 'Комментарий удален' }))
      .catch(next);
  });
