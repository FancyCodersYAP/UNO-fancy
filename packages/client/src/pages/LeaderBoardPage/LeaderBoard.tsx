import { FC, useEffect } from 'react';
import orderBy from 'lodash/orderBy';

import { isArrayAndHasItems } from 'utils';
import { useAppDispatch } from 'hooks/redux';

import {
  StBoard,
  StTitle,
  StTable,
  StHead,
  StBody,
  StPlaceholder,
  StWinsColumnsHead,
  StHeadChild,
} from './style';
import BoardItem from './BoardItem';
import { leaderboardList } from 'store/Leaderboard/leaderboardSlice';
import { fetchLeaderboard } from 'store/Leaderboard/actions';

const LeaderBoard: FC = () => {
  const dispatch = useAppDispatch();

  const displayedPlayersNum = 20;
  const topPlayers = leaderboardList().slice(0, displayedPlayersNum);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, []);

  const sortedPlayers = orderBy(topPlayers, 'score', 'desc');

  return (
    <StBoard>
      {isArrayAndHasItems(sortedPlayers) ? (
        <>
          <StTitle>Рейтинг игроков</StTitle>
          <StTable>
            <StHead>
              <StHeadChild>#</StHeadChild>
              <StHeadChild>Игрок</StHeadChild>
              <StHeadChild>Очки</StHeadChild>
              <StWinsColumnsHead>
                <StHeadChild>Победы</StHeadChild>
                <StHeadChild>2 игрока</StHeadChild>
                <StHeadChild>4 игрока</StHeadChild>
              </StWinsColumnsHead>
            </StHead>
            <StBody>
              {sortedPlayers.map((player, index) => (
                <BoardItem
                  key={player.data.id}
                  place={index + 1}
                  {...player.data}
                />
              ))}
            </StBody>
          </StTable>
        </>
      ) : (
        <StPlaceholder>
          Данных для рейтинга пока недостаточно.
          <br />
          Сыграй и стань лидером!
        </StPlaceholder>
      )}
    </StBoard>
  );
};

export default LeaderBoard;
