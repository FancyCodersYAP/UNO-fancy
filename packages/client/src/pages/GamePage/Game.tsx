import { useEffect, useState } from 'react';
import { GamePlayerType } from 'game/types';
import { controller } from '../../game/Controller';
import GameSettings from 'components/GameSettings';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import EndGame from 'components/EndGame';
import styled from 'styled-components';
import { StFlex } from 'styles/global';
import { useGameContext } from 'contexts/GameContext';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function GamePage() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [gamePlay, setGamePlay] = useState(true);
  const { changeGameStatus } = useGameContext();

  useEffect(() => {
    handleOpenModal();
    controller.initGame();
    controller.onFinish(() => {
      changeGameStatus?.();
      handleOpenModal();
      setGamePlay(!gamePlay);
    });
  }, []);

  const startGame = (playerNums: number) => {
    controller.startGame(playerNums, { name: 'Carl' } as GamePlayerType);
    changeGameStatus?.();
    setGamePlay(!gamePlay);
  };

  const reactivateGame = () => {
    changeGameStatus?.();
  };

  const data = {
    time: '05:10',
    countPlace: 4,
    points: 100,
    result: 1,
  };

  return (
    <StGameFlex id="game-page">
      {gamePlay && isOpen && (
        <Modal title="Выбор режима игры">
          <GameSettings
            handleCloseModal={handleCloseModal}
            startGame={startGame}
          />
        </Modal>
      )}
      {!gamePlay && isOpen && (
        <Modal title="Игра завершена">
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
