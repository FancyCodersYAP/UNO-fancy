import express, {
  type Request,
  type Response,
  Router,
  type NextFunction,
} from 'express';

import { checkUserAuth } from '../middlewares/checkUserAuth';
import {
  forumTopicsList,
  topicDel,
  topicGetById,
  topicPost,
} from '../controllers/forumTopicsList';

export const forumTopics = Router()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', checkUserAuth)
  .get('/', (req: Request, res: Response, next: NextFunction) => {
    forumTopicsList()
      .then(topics => res.status(200).json(topics))
      .catch(next);
  })
  .get('/:id', (req: Request, res: Response, next) => {
    topicGetById(req.params.id)
      .then(topic => {
        topic
          ? res.status(200).json(topic)
          : res.status(404).json({ reason: 'тема не найдена' });
      })
      .catch(next);
  })
  .post('/', (req: Request, res: Response, next) => {
    req.body.user_id = res.locals.user.id;
    topicPost(req.body)
      .then(topic => res.status(201).send(topic))
      .catch(next);
  })
  .delete('/:id', (req: Request, res: Response, next) => {
    topicDel(req.params.id, res.locals.user.id)
      .then(topic => {
        return topic
          ? res.status(201).json({ id: Number(req.params.id) })
          : topic === null
          ? res.status(404).json({ reason: 'тема не найдена' })
          : res.status(403).json({ reason: 'тему может удалять только автор' });
      })
      .catch(next);
  });
