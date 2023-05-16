import { useAppSelector } from './redux';

export const leaderboardList = () => {
  const leaders = useAppSelector(state => state.LEADERBOARD.leaderList);
  const isLoading = useAppSelector(state => state.LEADERBOARD.isLoading);
  return { isLoading, leaders };
};
