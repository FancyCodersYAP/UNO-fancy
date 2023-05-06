import { User } from '../models/User';
import { userRankGet, userRankUpdate } from './userRanks';

export const addUserData = async (user: User) => {
  await User.upsert({
    ya_id: user.id,
    login: user.login,
    display_name: user.display_name || user.login,
    avatar: user.avatar,
  });
  /*Проверка и выдача начального звания*/
  (await userRankGet(user.id)) || (await userRankUpdate(user.id));
};
