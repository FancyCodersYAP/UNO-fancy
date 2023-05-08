import { Ranks } from '../models/Ranks';
import { User } from '../models/User';

export const userRankGet = async (ya_id: number) => {
  return await User.findOne({
    attributes: ['rank_id'],
    where: { ya_id },
  });
};

export const userRankUpdate = async (ya_id: number): Promise<void> => {
  const rank_id = (await userRankGet(ya_id))?.rank_id ?? 0;
  const maxRankId = await Ranks.max('id');

  await User.update(
    { rank_id: rank_id === maxRankId ? maxRankId : rank_id + 1 },
    {
      where: {
        ya_id,
      },
    }
  );
};
