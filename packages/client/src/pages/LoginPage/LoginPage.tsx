import { FC, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from 'components/Form';
import { FormConfigType } from 'types';
import { ValidationType, AppRoute } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { StLink, StTextContainer } from 'styles/global';
import Button from 'components/Button';
import { fetchAuth, fetchLogin, fetchLogout } from '../../store/auth/actions';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { authState } from '../../hooks/authState';

export interface LoginFormParams extends FieldValues {
  first_name?: string;
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

  const [authError, user] = authState();
  useEffect(() => {
    // dispatch(fetchAuth()); //если авторизован то будет кидать обратно на главную, закоментировал пока для проверки
    if (user) {
      navigate('/');
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
      <Button text="Войти" type="submit" primary block />
      <StLink to={AppRoute.REGISTRATION}>Нет аккаунта?</StLink>
      <Button text="Яндекс ID" block />
      <p style={{ color: 'red', margin: 0, padding: 0 }}>{authError}</p>
      {/*оставил для теста нужно поменять на компонент ошибки*/}
    </StFormFooter>
  );

  return (
    <>
      <Form
        title="Вход"
        fields={loginConfig}
        handleFormSubmit={handleLogin}
        footer={footer}
      />
      {/*<Button onClick={handleLogout} text="Logout" />*/}
      {/*тестовая кнопка для разлогина*/}

      <StTextContainer width={400}>
        Lörem ipsum nepisa belingar mikrootrohet vifet. Desk tridade faviliga
        har obeling disyning. Trase nyrad saspelingar. Pidat robotfälla. Igisk
        gusm laligen nyruktiga. Or plaktigt. Mosk etnofas, mara sudins vodat.
        Psykofaktisk kassade, lare. Div hivan. Hexaska larad tisk. Desong
        antivaxxare suprast megacentrism dygnis. Ön gensax det mononde digital
        valuta för att pede. Gigatebelt ynade, plus memil ett syskade karodov.
        Lasade.
      </StTextContainer>
    </>
  );
};
export default LoginPage;
