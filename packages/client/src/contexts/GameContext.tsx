import React, { useContext } from 'react';
import { SoundNameType } from 'game/types';

type GameContextType = {
  isGame: boolean;
  changeGameStatus?: () => void;
  addSound?: (name: SoundNameType) => void;
  onPlay?: (name: SoundNameType) => void;
  switchSoundMode?: () => void;
  toggleAudioPause?: () => void;
  audioMute?: boolean;
};

const defaultGameState = {
  isGame: false,
};

export const GameContext =
  React.createContext<GameContextType>(defaultGameState);

export const useGameContext = () => {
  return useContext(GameContext);
};
