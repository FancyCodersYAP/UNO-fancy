import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback/ErrorFallback';

const StGameScreen = styled.div`
  background: ${props => props.theme?.BACKGROUND_COLOR_GAME};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const GameLayout: FC<LayoutProps> = ({ children }) => (
  <StGameScreen>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children ?? <Outlet />}
    </ErrorBoundary>
  </StGameScreen>
);

export default GameLayout;
