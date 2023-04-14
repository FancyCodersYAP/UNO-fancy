import { useState } from 'react';
import {
  StStatusBar,
  StButtonStatusBar,
  StStatusBarButtons,
  StStatusBarTime,
} from './style';
import {
  CloseSvg,
  FullScreenSvg,
  FullScreenExitSvg,
  SoundLoudSvg,
  SoundOffSvg,
  PauseSVG,
} from './statusBarSVG';
import { useGameContext } from 'contexts/GameContext';

const StatusBar = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const { isGame, switchSoundMode, audioMute, toggleAudioPause } =
    useGameContext();

  const toggleSound = () => {
    if (switchSoundMode) {
      switchSoundMode();
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  const exitGameClick = () => {
    // TODO: при клике вызывать модальное окно
  };

  return (
    <StStatusBar>
      <StStatusBarButtons>
        {isGame && (
          <StButtonStatusBar onClick={toggleSound}>
            {!audioMute ? <SoundLoudSvg /> : <SoundOffSvg />}
          </StButtonStatusBar>
        )}
        {isGame && (
          <StButtonStatusBar onClick={toggleAudioPause}>
            <PauseSVG />
          </StButtonStatusBar>
        )}
        <StButtonStatusBar onClick={toggleFullScreen}>
          {fullScreen ? <FullScreenExitSvg /> : <FullScreenSvg />}
        </StButtonStatusBar>
        {isGame && (
          <StButtonStatusBar onClick={exitGameClick}>
            <CloseSvg />
          </StButtonStatusBar>
        )}
      </StStatusBarButtons>
      {isGame && (
        <StStatusBarTime>
          0:12:34
          {/* TODO: Написать функцию для счётчика времени, пока заглушка */}
        </StStatusBarTime>
      )}
    </StStatusBar>
  );
};

export default StatusBar;
