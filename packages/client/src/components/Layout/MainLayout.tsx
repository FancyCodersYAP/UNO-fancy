import React, { FC } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';

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

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <StMainScreen>
      <Header />
      <StContent>{children}</StContent>
    </StMainScreen>
  );
};

export default MainLayout;
