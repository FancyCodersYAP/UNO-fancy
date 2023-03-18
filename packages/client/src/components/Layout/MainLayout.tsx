import { FC } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { StContainer } from '../../styles/global';

const StMainScreen = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  overflow: auto;
  background-image: url('src/assets/img/background.png');
  background-size: cover;
  background-position: center, center;
  margin: 0 15px;
  ${props => props?.theme.DARKEN}
`;

const StContent = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  flex: 1;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: FC<LayoutProps> = ({ children }) => (
  <StMainScreen>
    <StContainer css={{ flexDirection: 'column', justifyContent: 'center' }}>
      <Header />
      <StContent>{children ?? <Outlet />}</StContent>
    </StContainer>
  </StMainScreen>
);

export default MainLayout;
