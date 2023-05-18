import { FC, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';

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
import { TITLES, useTitle } from 'utils/useTitle';
import { errorReset } from '../../store/User/userSlice';

export interface LoginFormParams extends FieldValues {
  first_name: string;
  password?: string;
}

const LoginPage: FC = () => {
  useTitle(TITLES.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, userError } = userState();
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

  const errorCancel = () => {
    if (userError) dispatch(errorReset());
  };

  return (
    <StContainer alignItems="center" padding="0 40">
      <Form
        title="Вход"
        fields={loginConfig}
        handleFormSubmit={handleLogin}
        footer={footer}
        error={userError}
        errorReset={errorCancel}
      />
      <StTextGamePreviewContainer>
        {GAME_DESCRIPTION}
      </StTextGamePreviewContainer>
    </StContainer>
  );
};

export default LoginPage;
