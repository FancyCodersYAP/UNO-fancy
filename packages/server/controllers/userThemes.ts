import { UserThemes } from '../models/UserThemes';
import { Themes } from '../models/Themes';

export const themeGet = async (user_id: string) => {
  return UserThemes.findOne({
    where: { user_id },
    include: [{ model: Themes, attributes: ['theme_name'] }],
  });
};

export const themePost = async (theme_name: string, user_id: string) => {
  const theme = await Themes.findOne({
    where: { theme_name },
  });

  return (
    theme &&
    (await UserThemes.upsert({
      theme_id: theme.id,
      user_id,
    }))
  );
};
