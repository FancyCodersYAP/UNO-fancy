import { useEffect, useState } from 'react';
import {
  StStatusBar,
  StButtonStatusBar,
  StStatusBarButtons,
  StStatusBarIconActive,
} from './style';
import Timer from 'components/Timer/Timer';
import { StStatusBarIcon } from './style';

type StatusBarProps = {
  isGameOn: boolean;
  timer: number;
  pauseGame: () => void;
  exitGame: () => void;
  audioMute: boolean;
  switchSoundMode: () => void;
};

const StatusBar = ({
  isGameOn,
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
      setFullScreenState();
    } else {
      document.exitFullscreen();
      setFullScreenState();
    }
  };

  const setFullScreenState = () => {
    if (!document.fullscreenElement) {
      setFullScreen(false);
    } else {
      setFullScreen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', setFullScreenState);
    return () => {
      document.removeEventListener(
        'fullscreenchange',
        () => setFullScreenState
      );
    };
  }, []);

  return (
    <StStatusBar>
      <StStatusBarButtons>
        {isGameOn && (
          <StButtonStatusBar onClick={switchSoundMode} type="button">
            <StStatusBarIcon css={audioMute ? StStatusBarIconActive : ''}>
              {audioMute ? (
                <use href="/assets/icons/status-bar_sprite.svg#sound-off"></use>
              ) : (
                <use href="/assets/icons/status-bar_sprite.svg#sound-loud"></use>
              )}
            </StStatusBarIcon>
          </StButtonStatusBar>
        )}
        {isGameOn && (
          <StButtonStatusBar onClick={pauseGame} type="button">
            <StStatusBarIcon>
              <use href="/assets/icons/status-bar_sprite.svg#pause"></use>
            </StStatusBarIcon>
          </StButtonStatusBar>
        )}
        <StButtonStatusBar onClick={toggleFullScreen} type="button">
          <StStatusBarIcon css={fullScreen ? StStatusBarIconActive : ''}>
            {fullScreen ? (
              <use href="/assets/icons/status-bar_sprite.svg#fullscreen-exit"></use>
            ) : (
              <use href="/assets/icons/status-bar_sprite.svg#fullscreen"></use>
            )}
          </StStatusBarIcon>
        </StButtonStatusBar>
        {isGameOn && (
          <StButtonStatusBar onClick={exitGame} type="button">
            <StStatusBarIcon>
              <use href="/assets/icons/status-bar_sprite.svg#close"></use>
            </StStatusBarIcon>
          </StButtonStatusBar>
        )}
      </StStatusBarButtons>
      {isGameOn && <Timer timer={timer} />}
    </StStatusBar>
  );
};

export default StatusBar;
