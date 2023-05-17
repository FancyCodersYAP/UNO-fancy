import express, { type Request, type Response, Router } from 'express';
import { xssErrorHandler, xssValidator } from '../middlewares/xssValidation';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import { messageGetByID, messagePost } from '../controllers/forumMessages';
export const forumMessages = Router()
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use('/', checkUserAuth)
  .get('/:id', (req: Request, res: Response, next) => {
    messageGetByID(req.params.id)
      .then(message => {
        message
          ? res.status(200).json(message)
          : res.status(404).json({ reason: 'сообщение не найдено' });
      })
      .catch(next);
  })
  .post(
    '/',
    xssValidator(),
    xssErrorHandler,
    (req: Request, res: Response, next) => {
      req.body.user_id = res.locals.user.id;
      messagePost(req.body)
        .then(message => messageGetByID(message.id))
        .then(message => res.status(200).json(message))
        .catch(next);
    }
  );
