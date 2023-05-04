import type { RequestHandler } from 'express';
import { IUser, ApiRepository } from '../repository/ApiRepository';

export const checkUserAuth: RequestHandler = async (req, res, next) => {
  const cookie = req.headers['cookie'];
  const apiRepository = new ApiRepository(cookie);
  const user = (await apiRepository.getCurrentUser().catch(e => e)) as IUser; //при error ловим режект

  if (user?.id) {
    res.locals.user = user;
    next();
  } else {
    res.status(403).json('Доступ запрещен');
  }
};
