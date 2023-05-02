import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userState } from 'hooks/userState';
import { useAppDispatch } from 'hooks/redux';
import useModal from 'hooks/useModal';
import useTimer from 'hooks/useTimer';
import { audioManager } from 'game/services/audioManager';
import { fetchAuthUserGet } from '../../store/User/auth/actions';
import { controller } from '../../game/Controller';
import { GamePlayerType, soundNames } from 'game/types';
import formatTime from 'utils/formatTime';
import { AppRoute } from 'utils/constants';
import GameSettings from 'components/GameSettings';
import Modal from 'components/Modal';
import EndGame from 'components/EndGame';
import { css } from 'styled-components';
import ExitMenu from 'components/ExitMenu/ExitMenu';
import { exitMenuModalStyles } from 'components/Modal/style';
import StatusBar from 'components/StatusBar/StatusBar';
import { PlayModal } from './PlayModal';
import { StGameFlex } from './style';

const modalWidth = css`
  width: 700px;
`;

const modalPadding = css`
  padding: 50px 82px 76px;
`;

export function GamePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isStart, setStart] = useState(false);
  const [isFinish, setFinish] = useState(false);
  const [isPause, setPause] = useState(false);
  const [isOpenExitMenu, openExitMenu] = useState(false);
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
    playFinish,
  } = audioManager();
  const { timer, timerStart, timerPause, timerResume, timerReset } = useTimer();
  const { isLoading, user } = userState();

  useEffect(() => {
    dispatch(fetchAuthUserGet());

    for (const soundName of soundNames) {
      addSound(soundName);
    }

    setStart(true);
    handleOpenModal();

    controller.initGame();

    controller.onMove(() => {
      playSound('movement');
    });

    controller.onUnoClick(() => {
      playSound('uno');
    });

    controller.onSkipUnoClick(() => {
      playSound('skipUno');
    });

    controller.onFinish((points: number) => {
      setFinish(true);
      playFinish();
      handleOpenModal();
      setPoints(points);
      timerPause();
    });

    return () => {
      stopAudio();
    };
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

  /* Срабатывает при нажатии на паузу и на крестик (выход из игры) */
  const pauseAudioAndTimer = () => {
    toggleAudioPause();
    timerPause();
    handleOpenModal();
  };

  /* Срабатывает при нажатии на паузу */
  const pauseGame = () => {
    setPause(true);
    pauseAudioAndTimer();
  };

  /* Срабатывает при клике на крестик в статус баре (выход из игры) */
  const exitGame = () => {
    openExitMenu(true);
    pauseAudioAndTimer();
  };

  /* Срабатывает при возвращении в игру с паузы либо, если юзер передумал выходить из игры */
  const resumeGame = () => {
    if (isPause) {
      setPause(false);
    }
    if (isOpenExitMenu) {
      openExitMenu(false);
    }
    toggleAudioPause();
    timerResume();
    handleCloseModal();
  };

  /* Срабатывает, когда игра закончилась и юзер хочет сыграть ещё раз */
  const reactivateGame = () => {
    setFinish(false);
    setStart(true);
  };

  /* Выход со страницы игры */
  const navigateToMain = () => {
    stopAudio();
    navigate(AppRoute.MAIN);
  };

  const isGameOn = !isStart && !isFinish && !isOpenExitMenu && !isPause;

  return (
    <StGameFlex id="game-page">
      <StatusBar
        isGameOn={isGameOn}
        timer={timer}
        pauseGame={pauseGame}
        exitGame={exitGame}
        audioMute={audioMute}
        switchSoundMode={switchSoundMode}
      />
      {isStart && isOpen && (
        <Modal title="Выбор режима игры" styles={modalWidth}>
          <GameSettings
            handleCloseModal={handleCloseModal}
            startGame={startGame}
          />
        </Modal>
      )}
      {isPause && isOpen && <PlayModal resumeGame={resumeGame} />}
      {isOpenExitMenu && isOpen && (
        <Modal
          styles={exitMenuModalStyles}
          handleCloseModal={resumeGame}
          canBeClosedOutside>
          <ExitMenu resumeGame={resumeGame} navigateToMain={navigateToMain} />
        </Modal>
      )}
      {isFinish && isOpen && (
        <Modal title="Игра завершена" styles={modalPadding}>
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
