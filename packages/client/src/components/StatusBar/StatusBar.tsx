import { useState } from 'react';
import {
  StStatusBar,
  StButtonStatusBar,
  StStatusBarButtons,
  ButtonStatusBarActive,
} from './style';
import {
  CloseSvg,
  FullScreenSvg,
  FullScreenExitSvg,
  SoundLoudSvg,
  SoundOffSvg,
  PauseSVG,
} from './statusBarSVG';
import Timer from 'components/Timer/Timer';

type StatusBarProps = {
  isGameOn: boolean;
  isPause: boolean;
  timer: number;
  pauseGame: () => void;
  exitGame: () => void;
  audioMute: boolean;
  switchSoundMode: () => void;
};

const StatusBar = ({
  isGameOn,
  isPause,
  timer,
  pauseGame,
  exitGame,
  audioMute,
  switchSoundMode,
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
        {isGameOn && !isPause && (
          <StButtonStatusBar onClick={switchSoundMode}>
            {!audioMute ? <SoundLoudSvg /> : <SoundOffSvg />}
          </StButtonStatusBar>
        )}
        {isGameOn && (
          <StButtonStatusBar
            onClick={pauseGame}
            css={isPause ? ButtonStatusBarActive : ''}>
            <PauseSVG />
          </StButtonStatusBar>
        )}
        <StButtonStatusBar onClick={toggleFullScreen}>
          {fullScreen ? <FullScreenExitSvg /> : <FullScreenSvg />}
        </StButtonStatusBar>
        {isGameOn && !isPause && (
          <StButtonStatusBar onClick={exitGame}>
            <CloseSvg />
          </StButtonStatusBar>
        )}
      </StStatusBarButtons>
      {isGameOn && <Timer timer={timer} />}
    </StStatusBar>
  );
};

export default StatusBar;
