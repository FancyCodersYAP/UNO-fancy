import { FC, useEffect } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { fetchAuth } from '../../store/auth/actions';
import { useAppDispatch } from '../../hooks/redux';
import { authState } from '../../hooks/authState';

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
  children?: React.ReactNode;
};

const MainLayout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = authState();

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  if (isLoading) return <></>; //можно вставить какой-то лоадер

  return (
    <StMainScreen>
      <Header />
      <StContent>{children ?? <Outlet />}</StContent>
    </StMainScreen>
  );
};

export default MainLayout;
