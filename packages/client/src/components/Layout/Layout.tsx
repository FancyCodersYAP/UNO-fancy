import React, { FC } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';

const StGameScreen = styled.div``;

const StMainScreen = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow: auto;
  background-image: url('src/assets/img/background.png');
  background-size: cover;
`;

const StContent = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  padding: 20px;
  flex: 1;
`;

type LayoutProps = { children: React.ReactNode; isGameScreen?: boolean };

const Layout: FC<LayoutProps> = ({ children, isGameScreen }) => {
  if (isGameScreen) {
    return (
      <StGameScreen>
        <Header />
        <StContent>{children}</StContent>
      </StGameScreen>
    );
  }
  return (
    <StMainScreen>
      <Header />
      <StContent>{children}</StContent>
    </StMainScreen>
  );
};

export default Layout;
