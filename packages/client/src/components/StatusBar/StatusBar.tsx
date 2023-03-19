import {
  StStatusBar,
  StButtonStatusBar,
  StStatusBarButtons,
  StStatusBarTime,
} from './style';
import { useState } from 'react';
import {
  CloseSvg,
  FullScreenSvg,
  FullScreenExitSvg,
} from 'assets/icons/statusBarSVG';

/* Только для теста. Удалить 15-34 */
const TemporarySvg = (): JSX.Element => (
  <svg
    height="30px"
    width="30px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4H6V20H8.06066L12 16.0607L15.9393 20H18V4ZM7.5 18.4393V5.5H16.5V18.4393L12 13.9393L7.5 18.4393Z"
        fill="purple"></path>
    </g>
  </svg>
);

const StatusBar = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [isGame, setGame] = useState(false);

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

  /* Только для теста. Удалить 55-57 */
  const toggleGame = () => {
    isGame === false ? setGame(true) : setGame(false);
  };

  return (
    <StStatusBar>
      <StStatusBarButtons>
        <StButtonStatusBar onClick={toggleGame} marginRight>
          {/* Только для теста. Удалить 62-65 */}
          <TemporarySvg />
        </StButtonStatusBar>
        <StButtonStatusBar onClick={toggleFullScreen} marginRight>
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
