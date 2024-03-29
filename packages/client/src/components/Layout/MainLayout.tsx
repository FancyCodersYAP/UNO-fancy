import { FC, useEffect } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useAppDispatch } from '../../hooks/redux';
import { userState } from '../../hooks/userState';
import { StContainer } from 'styles/global';

import bgImage from '/assets/img/background.png';
import { fetchOauthCodePost } from '../../store/User/oauth/actions';
import { REDIRECT_URL } from '../../store/constants';
import ErrorFallback from 'components/ErrorFallback/ErrorFallback';

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
  const { isLoading, user } = userState();

  useEffect(() => {
    const oauthCode = new URLSearchParams(window.location.search).get('code');
    if (oauthCode) {
      window.history.pushState({}, '', REDIRECT_URL);

      dispatch(fetchOauthCodePost(oauthCode));
    }
  }, []);

  if (isLoading && !user) return <></>; //TODO здесь нужен лодер либо его нужно будет организовать через роутинг

  return (
    <StMainScreen>
      <StContainer flexDirection="column" alignItems="stretch">
        <Header />
        <StContent>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children ?? <Outlet />}
          </ErrorBoundary>
        </StContent>
      </StContainer>
    </StMainScreen>
  );
};

export default MainLayout;
