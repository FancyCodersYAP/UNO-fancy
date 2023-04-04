import type { FC } from 'react';
import { useState, useEffect } from 'react';
import orderBy from 'lodash/orderBy';

import { isArrayAndHasItems } from 'utils';
import { PlayerType } from 'types';

import {
  StBoard,
  StTitle,
  StTable,
  StHead,
  StBody,
  StPlaceholder,
} from './style';
import BoardItem from './BoardItem';

const LeaderBoard: FC = () => {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    // here would be some logic for getting players
    setPlayers([]);
  }, []);

  const sortedPlayers = orderBy(players, 'score', 'desc');

  return (
    <StBoard>
      {isArrayAndHasItems(sortedPlayers) ? (
        <>
          <StTitle>Рейтинг игроков</StTitle>
          <StTable>
            <StHead>
              <div>#</div>
              <div>Игрок</div>
              <div>Время</div>
              <div>Очки</div>
            </StHead>
            <StBody>
              {sortedPlayers.map((player, index) => (
                <BoardItem key={player.id} place={index + 1} {...player} />
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
