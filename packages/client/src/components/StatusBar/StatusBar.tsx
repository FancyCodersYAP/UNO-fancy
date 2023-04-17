import {
  StStatusBar,
  StButtonStatusBar,
  StStatusBarButtons,
  StStatusBarTime,
} from './style';
import { CloseSvg, FullScreenSvg, FullScreenExitSvg } from './statusBarSVG';
import { useState } from 'react';

type StatusBarProps = {
  isStart: boolean;
  pauseGame: () => void;
}

const StatusBar = ({isStart, pauseGame}: StatusBarProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  const exitGameClick = () => {
    pauseGame();
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

  return (
    <StStatusBar>
      <StStatusBarButtons>
        <StButtonStatusBar onClick={toggleFullScreen}>
          {fullScreen ? <FullScreenExitSvg /> : <FullScreenSvg />}
        </StButtonStatusBar>
        {!isStart && (
          <StButtonStatusBar onClick={exitGameClick}>
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
