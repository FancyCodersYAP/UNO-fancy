import { FC, useEffect, useRef, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { isArrayAndHasItems } from 'utils';
import { useAppDispatch } from 'hooks/redux';
import { mockData } from './data';

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
  templateHeadWithScroll,
} from './style';
import BoardItem from './BoardItem';
import { leaderboardList } from 'hooks/leaderboardState';
import { fetchLeaderboard } from 'store/Leaderboard/actions';

const LeaderBoard: FC = () => {
  const dispatch = useAppDispatch();

  const { leaders } = leaderboardList();
  const [state, updateState] = useState(0);
  const displayedPlayersNum = 20;

  const topPlayers = leaders.slice(0, displayedPlayersNum);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, []);

  useEffect(() => {
    updateState(state + 1); //принудительно меняем состояние компонента
  }, [topPlayers?.length]);

  const tableRef = useRef<HTMLDivElement | null>(null);
  const headStyleTemplate = css`
    ${tableRef.current &&
    tableRef.current.scrollHeight > tableRef.current?.clientHeight
      ? templateHeadWithScroll
      : ''}
  `;

  return (
    <StBoard>
      {topPlayers?.length ? (
        <>
          <StTitle css={marginBottom40px}>Рейтинг игроков</StTitle>
          <StTable>
            <StHead css={headStyleTemplate}>
              <StHeadChild>#</StHeadChild>
              <StHeadChild>Игрок</StHeadChild>
              <StHeadChild>Очки</StHeadChild>
              <StWinsColumnsHead>
                <StHeadChild>Победы</StHeadChild>
                <StHeadChild>2 игрока</StHeadChild>
                <StHeadChild>4 игрока</StHeadChild>
              </StWinsColumnsHead>
            </StHead>
            <StBody ref={tableRef}>
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
  );
};

export default LeaderBoard;
