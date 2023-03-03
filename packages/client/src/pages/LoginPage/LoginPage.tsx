import React, { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import Form from 'components/Form';
import { FormConfigType } from 'types';
import { ValidationType } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { linkStyle } from 'styles/global';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import * as COLORS from 'styles/variables/colors'

export interface LoginFormParams extends FieldValues {
  first_name?: string;
  password?: string;
}

const LoginPage: FC = () => {
  const loginConfig: FormConfigType[] = [
    {
      name: 'first_name',
      label: 'Логин',
      pattern: ValidationType.Name,
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

  //TODO после мерджа задачи с роутером "Нет аккаунта?" заменить на Link
  const footer = (
    <StFormFooter>
      <Button text="Войти" type="submit" primary block />
      <Link to='/registration' style={linkStyle}>Нет аккаунта?</Link>
      <Button text="Яндекс ID" block />
    </StFormFooter>
  );

  return (
    <Layout>
      <Form
        title="Вход"
        fields={loginConfig}
        handleFormSubmit={handleLogin}
        footer={footer}
      />
      <div style={{ width: 400, color: COLORS.MAIN_TEXT_COLOR }}>
        Lörem ipsum nepisa belingar mikrootrohet vifet. Desk tridade faviliga
        har obeling disyning. Trase nyrad saspelingar. Pidat robotfälla. Igisk
        gusm laligen nyruktiga. Or plaktigt. Mosk etnofas, mara sudins vodat.
        Psykofaktisk kassade, lare. Div hivan. Hexaska larad tisk. Desong
        antivaxxare suprast megacentrism dygnis. Ön gensax det mononde digital
        valuta för att pede. Gigatebelt ynade, plus memil ett syskade karodov.
        Lasade.
      </div>
    </Layout>
  );
};
export default LoginPage;
