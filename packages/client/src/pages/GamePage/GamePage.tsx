import { useEffect, useState } from 'react';
import { GamePlayerType } from 'game/types';
import { controller } from '../../game/Controller';
import GameSettings from 'components/GameSettings';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import EndGame from 'components/EndGame';
import styled from 'styled-components';
import { StFlex } from 'styles/global';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function GamePage() {
  const { isOpen, handleCloseModal } = useModal();
  const { changeGameStatus } = useGameContext();

  const reactivateGame = () => {
    changeGameStatus(true);
  };

  const data = {
    time: '05:10',
    countPlace: 4,
    points: 100,
    result: 1,
  };

  return (
    <StGameFlex id="game-page">
      {gameStatus && (
        <Modal title="Выбор режима игры" isOpen={isOpen}>
          <GameSettings
            handleCloseModal={handleCloseModal}
            startGame={startGame}
          />
        </Modal>
      )}
      {!gameStatus && (
        <Modal title="Игра завершена" isOpen={isOpen}>
          <EndGame
            time={data.time}
            countPlace={data.countPlace}
            points={data.points}
            result={data.result}
            reactivateGame={reactivateGame}
          />
        </Modal>
      )}
    </StGameFlex>
  );
}
