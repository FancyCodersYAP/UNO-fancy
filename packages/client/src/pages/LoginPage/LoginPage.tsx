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
  const handleLogin = async (data: LoginFormParams): Promise<any> => {
    console.log(data);
  };

  const footer = (
    <StFormFooter>
      <Button text="Войти" type="submit" block />
      <StLink to={AppRoute.REGISTRATION}>Нет аккаунта?</StLink>
      <Button text="Яндекс ID" disignType="secondary" block />
    </StFormFooter>
  );

  return (
    <StContainer css={{ alignItems: 'center' }}>
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
