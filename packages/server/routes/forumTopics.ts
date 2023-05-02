import express, {
  type Request,
  type Response,
  Router,
  type NextFunction,
} from 'express';

import { checkUserAuth } from '../middlewares/checkUserAuth';
import { ForumTopic } from '../models/ForumTopic';
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
      .then(topic => res.status(200).json(topic))
      .catch(next);
  })
  .post('/', (req: Request, res: Response, next) => {
    req.body.user_id = res.locals.user.id;
    topicPost(req.body)
      .then(topic => res.status(201).send({ id: topic.id }))
      .catch(next);
  })
  .delete('/:id', (req: Request, res: Response, next) => {
    topicDel(req.params.id, res.locals.user.id).then();
    res.status(201).send('del');
  });
