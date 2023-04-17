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
import { audioManager } from 'game/services/audioManager';
import useTimer from 'hooks/useTimer';
import formatTime from 'utils/formatTime';

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
  const [points, setPoints] = useState(0);
  const [countPlayers, setCountPlayers] = useState(0);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const {
    audioMute,
    switchSoundMode,
    addSound,
    onPlay,
    toggleAudioPause,
    stopAudio,
  } = audioManager();
  const { timer, handleStart, handlePause, handleResume, handleReset } =
    useTimer();

  useEffect(() => {
    setStart(true);
    handleOpenModal();

    controller.initGame();

    controller.onMove(() => {
      onPlay?.('movement');
    });

    controller.onFinish((points: number) => {
      setFinish(true);
      stopAudio();
      handleOpenModal();
      setPoints(points);
      handlePause();
    });
  }, []);

  const startGame = (playerNums: number) => {
    handleReset();
    setStart(false);
    handleCloseModal();
    controller.startGame(playerNums, { name: 'Carl' } as GamePlayerType);
    addSound?.('background');
    addSound?.('movement');
    handleStart();
    setCountPlayers(playerNums);
  };

  const reactivateGame = () => {
    setFinish(false);
    setStart(true);
  };

  const pauseGame = () => {
    setPause(!isPause);
    toggleAudioPause();
    if (!isPause) {
      handlePause();
    } else {
      handleResume();
    }
  };

  const exitGame = () => {
    pauseGame();
    handleOpenModal();
  };

  const resumeGame = () => {
    handleCloseModal();
    setPause(false);
    toggleAudioPause();
    handleResume();
  };

  const isGameOn = !isStart && !isFinish;

  return (
    <StGameFlex id="game-page">
      <StatusBar
        isGameOn={isGameOn}
        isPause={isPause}
        timer={timer}
        pauseGame={pauseGame}
        exitGame={exitGame}
        audioMute={audioMute}
        switchSoundMode={switchSoundMode}
      />
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
          handleCloseModal={resumeGame}
          canBeClosedOutside>
          <ExitMenu resumeGame={resumeGame} />
        </Modal>
      )}
      {isFinish && isOpen && (
        <Modal title="Игра завершена">
          <EndGame
            time={formatTime(timer).toString()}
            countPlace={countPlayers}
            points={points}
            result={points ? 'Победа' : 'Проигрыш'}
            reactivateGame={reactivateGame}
          />
        </Modal>
      )}
    </StGameFlex>
  );
}
