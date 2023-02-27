import React, { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from 'components/Form';
import { FormConfigType } from 'types';
import { ValidationType } from 'utils/constants';
import { StButton, StFooter, StSubmitButton } from 'components/Form/FormStyle';
import { StLeftSector, StRightSector, Separator } from 'styles/global';

export interface LoginFormParams extends FieldValues {
  first_name?: string;
  password?: string;
}

const Login: FC = () => {
  const loginConfig: FormConfigType[] = [
    {
      name: 'first_name',
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
  const handleLogin = async (data: LoginFormParams): Promise<any> => {
    console.log(data);
  };
  const footer = (
    <StFooter>
      <StSubmitButton type="submit">Войти</StSubmitButton>
      <Separator>или</Separator>
      <StButton type="submit">Не зарегистрированы?</StButton>
    </StFooter>
  );

  return (
    <div style={{ display: 'flex' }}>
      <StLeftSector>
        <Form
          title="Добро пожаловать"
          subtitle="Пожалуйста, введите логин и пароль"
          fields={loginConfig}
          handleFormSubmit={handleLogin}
          footer={footer}
        />
      </StLeftSector>
      <StRightSector />
    </div>
  );
};
export default Login;
