import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import StatusBar from 'components/StatusBar/StatusBar';
import { GameContext } from 'contexts/GameContext';
import { BACKGROUND_COLOR_GAME_PRIMARY } from 'styles/variables/colors-const';
import { audioManager } from 'game/services/audioManager';

const StGameScreen = styled.div`
  height: 100vh;
  background: ${BACKGROUND_COLOR_GAME_PRIMARY};
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => {
  const [gameStatus, setGameStatus] = useState(false);
  const { audioMute, switchSoundMode, addSound, onPlay, toggleAudioPause } =
    audioManager();

  const changeGameStatus = () => {
    setGameStatus(!gameStatus);
  };

  const game = {
    isGame: gameStatus,
    changeGameStatus,
    addSound,
    onPlay,
    switchSoundMode,
    toggleAudioPause,
    audioMute,
  };

  return (
    <GameContext.Provider value={game}>
      <StGameScreen>
        <StatusBar />
        {children ?? <Outlet />}
      </StGameScreen>
    </GameContext.Provider>
  );
};

export default GameLayout;
