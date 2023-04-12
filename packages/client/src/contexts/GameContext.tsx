import React, { useContext } from 'react';

type GameContextType = {
  isGame: boolean;
  changeGameStatus?: () => void;
};

const defaultGameState = {
  isGame: false,
};

export const GameContext =
  React.createContext<GameContextType>(defaultGameState);

export const useGameContext = () => {
  return useContext(GameContext);
};
