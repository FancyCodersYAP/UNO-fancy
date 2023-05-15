import { FC, useEffect, useRef, useState } from 'react';
import { css } from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';

import { isArrayAndHasItems } from 'utils';
import { useAppDispatch } from 'hooks/redux';
import ErrorFallback from 'components/ErrorFallback/ErrorFallback';

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

const marginBottom40px = css`
  margin: 0 0 40px;
`;

const LeaderBoard: FC = () => {
  const dispatch = useAppDispatch();
  const [hasScroll, setScrollPresence] = useState(true);

  const { leaders } = leaderboardList();

  const displayedPlayersNum = 50;
  const topPlayers = leaders.slice(0, displayedPlayersNum);

  const tableBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, []);

  useEffect(() => {
    const tableBody = tableBodyRef.current;

    if (tableBody?.scrollHeight === tableBody?.offsetHeight) {
      setScrollPresence(false);
    } else {
      setScrollPresence(true);
    }
  }, [topPlayers.length]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StBoard>
        {isArrayAndHasItems(topPlayers) ? (
          <>
            <StTitle css={marginBottom40px}>Рейтинг игроков</StTitle>
            <StTable hasScroll={hasScroll}>
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
              <StBody ref={tableBodyRef} hasScroll={hasScroll}>
                {topPlayers.map((player, index) => (
                  <BoardItem
                    key={player.data.game_id}
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
    </ErrorBoundary>
  );
};

export default LeaderBoard;
