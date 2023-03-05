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
  ${props => props?.theme.DARKEN}
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

type LayoutProps = {
  isGameScreen?: boolean;
  children: React.ReactNode;
  themeChange: () => void;
};

const Layout: FC<LayoutProps> = ({ children, isGameScreen, ...rest }) => {
  if (isGameScreen) {
    return (
      <StGameScreen>
        <Header {...rest} />
        <StContent>{children}</StContent>
      </StGameScreen>
    );
  }
  return (
    <StMainScreen>
      <Header {...rest} />
      <StContent>{children}</StContent>
    </StMainScreen>
  );
};

export default Layout;
