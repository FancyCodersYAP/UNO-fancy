import { FC } from 'react';
import orderBy from 'lodash/orderBy';

import { isArrayHasItems } from 'utils';
import { PlayerType } from 'types';

import { StBoard, StTitle, StTable, StHead, StBody, StPlaceholder } from './style';
import BoardItem from './BoardItem';

const LeaderBoard: FC = () => {
  const players: PlayerType[] = [];

  const sortedPlayers = orderBy(players, 'score', 'desc');

  return (
    <StBoard>
      {
        isArrayHasItems(sortedPlayers)
          ? (
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
                  { sortedPlayers.map((player, index) => <BoardItem key={player.id} place={index + 1} {...player} />) }
                </StBody>
              </StTable>
            </>)
            : <StPlaceholder>Данных для рейтинга пока недостаточно.<br />Сыграй и стань лидером!</StPlaceholder>
      }
    </StBoard>
    
  )
};

export default LeaderBoard;
