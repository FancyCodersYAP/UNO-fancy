import React, { FC } from 'react';
import styled from 'styled-components';

const StGameScreen = styled.div``;

type LayoutProps = {
  children: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => (
  <StGameScreen>{children}</StGameScreen>
);

export default GameLayout;
