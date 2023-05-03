import { FC, useEffect } from 'react';
import { css } from 'styled-components';

import { isArrayAndHasItems } from 'utils';
import { useAppDispatch } from 'hooks/redux';

const marginBottom40px = css`
  margin: 0 0 40px;
`;

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
import { leaderboardList } from 'hooks/leaderboardState';
import { fetchLeaderboard } from 'store/Leaderboard/actions';

const LeaderBoard: FC = () => {
  const dispatch = useAppDispatch();

  const { leaders } = leaderboardList();

  const displayedPlayersNum = 20;
  const topPlayers = leaders.slice(0, displayedPlayersNum);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, []);

  return (
    <StBoard>
      {isArrayAndHasItems(topPlayers) ? (
        <>
          <StTitle css={marginBottom40px}>Рейтинг игроков</StTitle>
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
              {topPlayers.map((player, index) => (
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
