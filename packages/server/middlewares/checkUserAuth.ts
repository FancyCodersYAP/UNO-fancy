import type { RequestHandler } from 'express';
import { IUser, YandexAPIRepository } from '../repository/YandexAPIRepository';

export const checkUserAuth: RequestHandler = async (req, res, next) => {
  const cookie = req.headers['cookie'];
  const yandexAPIRepository = new YandexAPIRepository(cookie);
  const user = (await yandexAPIRepository.getCurrent()) as IUser;

  if (user?.id) {
    res.locals.user = user;
    next();
  } else {
    res.status(403).json('Доступ запрещен');
  }
};
