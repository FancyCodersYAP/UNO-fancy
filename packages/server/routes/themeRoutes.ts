import express, { type Request, type Response, Router } from 'express';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import { themeGet, themePost } from '../controllers/userThemes';

export const themeRoutes = Router()
  .use(express.json())
  .use('/', checkUserAuth)
  .get(
    '/',
    async (req: Request, res: Response, next): Promise<Response | void> => {
      try {
        const userId = res.locals.user.id;

        const userTheme = await themeGet(userId);

        if (userTheme?.theme.theme_name) {
          return res.status(200).json(userTheme.theme.theme_name);
        }
        return res.status(404).json('для пользователя нет темы');
      } catch (e) {
        next(e);
      }
    }
  )

  .post(
    '/',
    async (req: Request, res: Response, next): Promise<Response | void> => {
      try {
        const {
          data: { theme_name },
        } = req.body;

        const userId = res.locals.user.id;

        const userTheme = await themePost(theme_name, userId);

        if (userTheme) {
          return res.status(201).json(userTheme);
        }

        return res.status(422).json('unknown data');
      } catch (e) {
        next(e);
      }
    }
  );
