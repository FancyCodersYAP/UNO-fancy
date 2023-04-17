import { useEffect, useState } from 'react';
import { GamePlayerType } from 'game/types';
import { controller } from '../../game/Controller';
import GameSettings from 'components/GameSettings';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import EndGame from 'components/EndGame';
import styled from 'styled-components';
import { StFlex } from 'styles/global';
import ExitMenu from 'components/ExitMenu/ExitMenu';
import { exitMenuModalStyles } from 'components/Modal/style';
import StatusBar from 'components/StatusBar/StatusBar';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function GamePage() {
  const [isStart, setStart] = useState(false);
  const [isFinish, setFinish] = useState(false);
  const [isPause, setPause] = useState(false);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    setStart(true);
    handleOpenModal();

    controller.initGame();
    controller.onFinish(() => {
      setFinish(true);
      handleOpenModal();
    });
  }, []);

  const startGame = (playerNums: number) => {
    setStart(false);
    handleCloseModal();
    controller.startGame(playerNums, { name: 'Carl' } as GamePlayerType);
  };

  const reactivateGame = () => {
    setFinish(false);
    setStart(true);
  };

  const pauseGame = () => {
    handleOpenModal();
    setPause(true);
  }

  const resumeGame = () => {
    handleCloseModal();
    setPause(false);
  }

  const data = {
    time: '05:10',
    countPlace: 4,
    points: 100,
    result: 1,
  };

  return (
    <StGameFlex id="game-page">
      <StatusBar isStart={isStart} pauseGame={pauseGame} />
      {isStart && isOpen && (
        <Modal title="Выбор режима игры">
          <GameSettings
            handleCloseModal={handleCloseModal}
            startGame={startGame}
          />
        </Modal>
      )}
      {isPause && isOpen && (
        <Modal
          styles={exitMenuModalStyles}
          handleCloseModal={handleCloseModal}
          canBeClosedOutside>
          <ExitMenu resumeGame={resumeGame} />
        </Modal>
      )}
      {isFinish && isOpen && (
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
