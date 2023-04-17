import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { BACKGROUND_COLOR_GAME_PRIMARY } from 'styles/variables/colors-const';

const StGameScreen = styled.div`
  background: ${BACKGROUND_COLOR_GAME_PRIMARY};
  width: 100%;
  height: 100%;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => {

  return (
      <StGameScreen>
        {children ?? <Outlet />}
      </StGameScreen>
  );
};

export default GameLayout;
