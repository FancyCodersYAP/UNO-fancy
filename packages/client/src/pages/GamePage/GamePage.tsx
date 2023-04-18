import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GamePlayerType, soundNames } from 'game/types';
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
import { userState } from 'hooks/userState';
import { useAppDispatch } from 'hooks/redux';
import { fetchAuthUserGet } from '../../store/User/auth/actions';
import { AppRoute } from 'utils/constants';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function GamePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    playSound,
    toggleAudioPause,
    stopAudio,
  } = audioManager();
  const { timer, timerStart, timerPause, timerResume, timerReset } = useTimer();
  const { isLoading, user } = userState();

  useEffect(() => {
    dispatch(fetchAuthUserGet());

    for (const soundName of soundNames) {
      addSound?.(soundName);
    }

    setStart(true);
    handleOpenModal();

    controller.initGame();

    controller.onMove(() => {
      playSound?.('movement');
    });

    controller.onUnoClick(() => {
      playSound?.('uno');
    });

    controller.onFinish((points: number) => {
      setFinish(true);
      playSound?.('finish');
      handleOpenModal();
      setPoints(points);
      timerPause();
    });
  }, []);

  if (isLoading) return <></>; //TODO здесь нужен лодер либо его нужно будет организовать через роутинг

  const startGame = (playerNums: number) => {
    setStart(false);

    timerReset();
    playSound('background');
    setCountPlayers(playerNums);
    timerStart();
    controller.startGame(playerNums, {
      name: user?.first_name,
    } as GamePlayerType);
    handleCloseModal();
  };

  const pauseGame = () => {
    setPause(!isPause);
    toggleAudioPause();

    if (!isPause) {
      timerPause();
    } else {
      timerResume();
    }
  };

  const exitGame = () => {
    pauseGame();
    handleOpenModal();
  };

  const resumeGame = () => {
    setPause(false);
    handleCloseModal();
    toggleAudioPause();
    timerResume();
  };

  const reactivateGame = () => {
    setFinish(false);
    setStart(true);
  };

  const navigateToMain = () => {
    stopAudio();
    navigate(AppRoute.MAIN);
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
          <ExitMenu resumeGame={resumeGame} navigateToMain={navigateToMain} />
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
            navigateToMain={navigateToMain}
          />
        </Modal>
      )}
    </StGameFlex>
  );
}
