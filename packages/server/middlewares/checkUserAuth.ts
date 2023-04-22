import type { RequestHandler } from 'express';
import { YandexAPIRepository } from '../repository/YandexAPIRepository';

export const checkUserAuth: RequestHandler = async (req, res, next) => {
  const user = await new YandexAPIRepository(
    req.headers['cookie']
  ).getCurrent();
  // console.log('userCheck', user);
  res.locals.user = user;
  next();
};
