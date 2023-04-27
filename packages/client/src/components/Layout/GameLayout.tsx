import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StGameScreen = styled.div`
  background: ${props => props.theme?.BACKGROUND_COLOR_GAME};
  width: 100%;
  height: 100%;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => (
  <StGameScreen>{children ?? <Outlet />}</StGameScreen>
);

export default GameLayout;
