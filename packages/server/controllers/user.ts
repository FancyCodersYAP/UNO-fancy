import { User } from '../models/User';

export const addUserData = async (user: User) => {
  await User.upsert({
    ya_id: user.id,
    login: user.login,
    display_name: user.display_name,
    avatar: user.avatar,
  });
};
