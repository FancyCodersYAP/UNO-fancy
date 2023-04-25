import express, { type Request, type Response, Router } from 'express';
import { Themes } from '../models/Themes';
import { UserThemes } from '../models/UserThemes';
import { checkUserAuth } from '../middlewares/checkUserAuth';

export const themeRoutes = Router()
  .use(express.json())
  .use('/', checkUserAuth)
  .get('/', async (req: Request, res: Response) => {
    const userId = res.locals.user.id;
    try {
      const userTheme: UserThemes | null = await UserThemes.findOne({
        where: { user_id: userId },
        include: [{ model: Themes, attributes: ['theme_name'] }],
      });

      if (userTheme && userTheme.theme.theme_name) {
        return res.status(200).json(userTheme.theme.theme_name);
      }
      return res.status(404).json('для пользователя нет темы');
    } catch {
      return res.status(500).json('Internal DB error');
    }
  })

  .post('/', async (req: Request, res: Response) => {
    const {
      data: { theme_name },
    } = req.body;

    const userId = res.locals.user.id;

    try {
      const theme: Themes | null = await Themes.findOne({
        where: { theme_name },
      });

      if (theme) {
        const userTheme: [UserThemes, null | boolean] = await UserThemes.upsert(
          {
            theme_id: theme.id,
            user_id: userId,
          }
        );

        if (userTheme) {
          return res.status(201).json(userTheme);
        }
      }

      return res.status(422).json('unknown data');
    } catch {
      return res.status(500).json('Internal DB error');
    }
  });
