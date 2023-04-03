import { FC, useEffect } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { fetchAuthUserGet } from '../../store/auth/actions';
import { useAppDispatch } from '../../hooks/redux';
import { authState } from '../../hooks/authState';
import { StContainer } from 'styles/global';

import bgImage from '../../assets/img/background.png';

const StMainScreen = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  overflow: auto;
  background-image: url('${bgImage}');
  background-size: cover;
  background-position: center, center;
  padding: 15px 15px;
  ${props => props?.theme.DARKEN}
`;

const StContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 15px 0;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = authState();

  useEffect(() => {
    dispatch(fetchAuthUserGet());
  }, []);

  if (isLoading) return <></>; //можно вставить какой-то лоадер

  return (
    <StMainScreen>
      <StContainer flexDirection="column" alignItems="stretch">
        <Header />
        <StContent>{children ?? <Outlet />}</StContent>
      </StContainer>
    </StMainScreen>
  );
};

export default MainLayout;
