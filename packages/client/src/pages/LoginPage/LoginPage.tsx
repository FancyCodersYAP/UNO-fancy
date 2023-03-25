import { FC, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from 'components/Form';
import { FormConfigType } from 'types';
import { ValidationType, AppRoute, GAME_DESCRIPTION } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { StContainer, StLink, StTextGamePreviewContainer } from 'styles/global';
import Button from 'components/Button';
import { fetchLogin, fetchLogout } from '../../store/auth/actions';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { authState } from '../../hooks/authState';

export interface LoginFormParams extends FieldValues {
  first_name: string;
  password?: string;
}

const LoginPage: FC = () => {
  const loginConfig: FormConfigType[] = [
    {
      name: 'login',
      label: 'Логин',
      pattern: ValidationType.Login,
      required: true,
    },
    {
      name: 'password',
      label: 'Пароль',
      pattern: ValidationType.Password,
      required: true,
    },
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authError, user } = authState();
  useEffect(() => {
    if (user) {
      navigate(AppRoute.MAIN);
    }
  }, [user]);

  const handleLogin = (data: LoginFormParams): void => {
    dispatch(fetchLogin(data));
  };

  const handleLogout = (): void => {
    //использовал для теста авторизации потом можно удалить когда будет страница профиля
    dispatch(fetchLogout());
  };

  const footer = (
    <StFormFooter>
      <Button text="Войти" type="submit" block />
      <StLink to={AppRoute.REGISTRATION}>Нет аккаунта?</StLink>
      <Button text="Яндекс ID" disignType="secondary" block />
      <p style={{ color: 'red', margin: 0, padding: 0 }}>{authError}</p>
      {/*оставил для теста нужно поменять на компонент ошибки*/}
    </StFormFooter>
  );

  return (
    <StContainer alignItems="center">
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
  );
};
export default LoginPage;
