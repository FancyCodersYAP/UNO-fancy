import React, { CSSProperties, FC } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';

const MainScreenStyle: CSSProperties = {
  backgroundImage: 'url(src/assets/img/background.png)',
  backgroundSize: 'cover',
};

const GameScreenStyle: CSSProperties = {};

const StContent = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  padding: 20px;
`;

const Layout: FC<{ children: React.ReactNode; isGameScreen?: boolean }> = ({
  children,
  isGameScreen,
}) => {
  return (
    <div style={isGameScreen ? GameScreenStyle : MainScreenStyle}>
      <Header />
      <StContent>{children}</StContent>
    </div>
  );
};

export default Layout;
