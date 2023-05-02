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
  });
