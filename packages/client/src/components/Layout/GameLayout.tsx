import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import StatusBar from 'components/StatusBar/StatusBar';

const StGameScreen = styled.div`
  height: 100vh;
  background: radial-gradient(#b0c9d7, #3a5d70);
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => (
  <StGameScreen>
    <StatusBar />
    <>{children ?? <Outlet />}</>
  </StGameScreen>
);

export default GameLayout;
