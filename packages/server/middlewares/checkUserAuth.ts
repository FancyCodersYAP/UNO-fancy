import type { RequestHandler } from 'express';
import { IUser, YandexAPIRepository } from '../repository/YandexAPIRepository';

export const checkUserAuth: RequestHandler = async (req, res, next) => {
  const user = (await new YandexAPIRepository(
    req.headers['cookie']
  ).getCurrent()) as IUser;

  if (user?.id) {
    res.locals.user = user;
    next();
  } else {
    res.status(403).json('Доступ запрещен');
  }
};
