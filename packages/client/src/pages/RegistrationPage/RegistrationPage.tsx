import { FC, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from 'components/Form';
import { FormConfigType } from 'types';
import { ValidationType, AppRoute } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { StLink, StTextContainer } from 'styles/global';
import Button from 'components/Button';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { fetchRegistration } from '../../store/auth/actions';
import { authState } from '../../hooks/authState';

export interface RegFormParams extends FieldValues {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

const RegistrationPage: FC = () => {
  const loginConfig: FormConfigType[] = [
    {
      name: 'login',
      label: 'Логин',
      pattern: ValidationType.Login,
      required: true,
    },
    {
      name: 'first_name',
      label: 'Имя',
      pattern: ValidationType.Name,
      required: true,
    },
    {
      name: 'second_name',
      label: 'Фамилия',
      pattern: ValidationType.Name,
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      pattern: ValidationType.Email,
      required: true,
    },
    {
      name: 'phone',
      label: 'Телефон',
      pattern: ValidationType.Phone,
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
    if (user) {
      navigate(AppRoute.MAIN);
    }
  }, [user]);

  const handleLogin = (data: RegFormParams): void => {
    dispatch(fetchRegistration(data));
  };

  const footer = (
    <StFormFooter>
      <Button text="Зарегистрироваться" type="submit" primary block />
      <StLink to={AppRoute.LOGIN}>Есть аккаунт?</StLink>
      <p style={{ color: 'red', margin: 0, padding: 0 }}>{authError}</p>
      {/*оставил для теста нужно поменять на компонент ошибки*/}
    </StFormFooter>
  );

  return (
    <>
      <Form
        title="Регистрация"
        fields={loginConfig}
        handleFormSubmit={handleLogin}
        footer={footer}
      />
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
export default RegistrationPage;
