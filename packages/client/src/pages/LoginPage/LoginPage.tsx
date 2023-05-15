import { FC, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { ErrorBoundary } from 'react-error-boundary';

import Form from 'components/Form';
import { AppRoute, GAME_DESCRIPTION } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { StContainer, StLink, StTextGamePreviewContainer } from 'styles/global';
import Button from 'components/Button';
import { fetchLogin } from '../../store/User/auth/actions';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { userState } from '../../hooks/userState';

import { loginConfig } from '../configs';
import { fetchOauthServiceIdGet } from '../../store/User/oauth/actions';
import ErrorFallback from 'components/ErrorFallback/ErrorFallback';

export interface LoginFormParams extends FieldValues {
  first_name: string;
  password?: string;
}

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = userState();
  useEffect(() => {
    if (user) {
      navigate(AppRoute.MAIN);
    }
  }, [user]);

  const handleLogin = (data: LoginFormParams): void => {
    dispatch(fetchLogin(data));
  };

  const handleOauth = (): void => {
    dispatch(fetchOauthServiceIdGet());
  };

  const footer = (
    <StFormFooter>
      <Button text="Войти" type="submit" block />
      <StLink to={AppRoute.REGISTRATION}>Нет аккаунта?</StLink>
      <Button
        type="button"
        onClick={handleOauth}
        text="Яндекс ID"
        disignType="secondary"
        block
      />
    </StFormFooter>
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StContainer alignItems="center" padding="0 40">
        <Form
          title="Вход"
          fields={loginConfig}
          handleFormSubmit={handleLogin}
          footer={footer}
        />
        <StTextGamePreviewContainer>
          {GAME_DESCRIPTION}
        </StTextGamePreviewContainer>
      </StContainer>
    </ErrorBoundary>
  );
};

export default LoginPage;
