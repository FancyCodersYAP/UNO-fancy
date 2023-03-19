import { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from 'components/Form';
import { FormConfigType } from 'types';
import { ValidationType, AppRoute, GAME_DESCRIPTION } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { StContainer, StLink, StTextGamePreviewContainer } from 'styles/global';
import Button from 'components/Button';

export interface LoginFormParams extends FieldValues {
  first_name?: string;
  password?: string;
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
  const handleLogin = async (data: LoginFormParams): Promise<any> => {
    console.log(data);
  };

  const footer = (
    <StFormFooter css={{ gap: 25 }}>
      <Button text="Зарегистрироваться" type="submit" block />
      <StLink to={AppRoute.LOGIN}>Есть аккаунт?</StLink>
    </StFormFooter>
  );

  return (
    <StContainer css={{ alignItems: 'center' }}>
      <Form
        title="Регистрация"
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
export default RegistrationPage;
