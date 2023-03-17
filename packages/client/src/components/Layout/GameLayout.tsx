import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StGameScreen = styled.div``;

type LayoutProps = {
  children?: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => (
  <StGameScreen>{children ?? <Outlet />}</StGameScreen>
);

export default GameLayout;
