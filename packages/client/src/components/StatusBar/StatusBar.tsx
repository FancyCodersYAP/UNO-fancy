import {
  StStatusBar,
  StButtonStatusBar,
  StStatusBarButtons,
  StStatusBarTime,
} from './style';
import { CloseSvg, FullScreenSvg, FullScreenExitSvg } from './statusBarSVG';
import { useState } from 'react';
import { useGameContext } from 'contexts/GameContext';

const StatusBar = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const { isGame } = useGameContext();

  const exitGameClick = () => {
    // TODO: при клике вызывать модальное окно
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
