import { UserRanks } from '../models/UserRanks';
import { Ranks } from '../models/Ranks';

export const userRankGet = async (user_id: number) => {
  return await UserRanks.findOne({
    attributes: ['rank_id', 'user_id'],
    where: { user_id },
    include: [{ model: Ranks, attributes: ['rank_name'] }],
    raw: true,
    nest: true,
  });
};

export const userRankUpdate = async (
  user_id: number
): Promise<UserRanks | null> => {
  const rank_id = (await userRankGet(user_id))?.rank_id ?? 0;
  const maxRankId = await Ranks.max('id');
  await UserRanks.upsert({
    rank_id: rank_id === maxRankId ? maxRankId : rank_id + 1,
    user_id,
  });
  return await userRankGet(user_id);
};
