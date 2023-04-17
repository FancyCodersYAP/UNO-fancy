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

type StatusBarProps = {
  isStart: boolean;
  pauseGame: () => void;
  audioMute: boolean;
  switchSoundMode: () => void;
  toggleAudioPause: () => void;
};

const StatusBar = ({
  isStart,
  pauseGame,
  audioMute,
  switchSoundMode,
  toggleAudioPause,
}: StatusBarProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  return (
    <StStatusBar>
      <StStatusBarButtons>
        {!isStart && (
          <StButtonStatusBar onClick={switchSoundMode}>
            {!audioMute ? <SoundLoudSvg /> : <SoundOffSvg />}
          </StButtonStatusBar>
        )}
        {!isStart && (
          <StButtonStatusBar onClick={toggleAudioPause}>
            <PauseSVG />
          </StButtonStatusBar>
        )}
        <StButtonStatusBar onClick={toggleFullScreen}>
          {fullScreen ? <FullScreenExitSvg /> : <FullScreenSvg />}
        </StButtonStatusBar>
        {!isStart && (
          <StButtonStatusBar onClick={pauseGame}>
            <CloseSvg />
          </StButtonStatusBar>
        )}
      </StStatusBarButtons>
      {!isStart && (
        <StStatusBarTime>
          0:12:34
          {/* TODO: Написать функцию для счётчика времени, пока заглушка */}
        </StStatusBarTime>
      )}
    </StStatusBar>
  );
};

export default StatusBar;
