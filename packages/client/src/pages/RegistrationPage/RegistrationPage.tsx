import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { FieldValues } from 'react-hook-form';

import Form from 'components/Form';
import { AppRoute, GAME_DESCRIPTION } from 'utils/constants';
import { StFormFooter } from 'components/Form/style';
import { StContainer, StLink, StTextGamePreviewContainer } from 'styles/global';
import Button from 'components/Button';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { fetchRegistration } from '../../store/User/auth/actions';
import { userState } from '../../hooks/userState';
import { registrationConfig } from '../configs';
import { TITLES, useTitle } from 'utils/useTitle';
import { errorReset } from '../../store/User/userSlice';

export interface RegFormParams extends FieldValues {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

const StyledFormFooter = styled(StFormFooter)`
  gap: 25px;
`;

const RegistrationPage: FC = () => {
  useTitle(TITLES.registration);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, userError } = userState();

  useEffect(() => {
    if (user) {
      navigate(AppRoute.MAIN);
    }
  }, [user]);

  const handleLogin = (data: RegFormParams): void => {
    dispatch(fetchRegistration(data));
  };

  const footer = (
    <StyledFormFooter>
      <Button text="Зарегистрироваться" type="submit" block />
      <StLink to={AppRoute.LOGIN}>Есть аккаунт?</StLink>
    </StyledFormFooter>
  );

  const errorCancel = () => {
    if (userError) dispatch(errorReset());
  };

  return (
    <StContainer alignItems="center" padding="0 40">
      <Form
        title="Регистрация"
        fields={registrationConfig}
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
export default RegistrationPage;
