import { FC, useEffect } from 'react';
import { css } from 'styled-components';
import { FieldValues } from 'react-hook-form';
import { ErrorBoundary } from 'react-error-boundary';

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
import ErrorFallback from 'components/ErrorFallback/ErrorFallback';

export interface RegFormParams extends FieldValues {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export const gap25 = css`
  gap: 25px;
`;

const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = userState();

  useEffect(() => {
    if (user) {
      navigate(AppRoute.MAIN);
    }
  }, [user]);

  const handleLogin = (data: RegFormParams): void => {
    dispatch(fetchRegistration(data));
  };

  const footer = (
    <StFormFooter css={gap25}>
      <Button text="Зарегистрироваться" type="submit" block />
      <StLink to={AppRoute.LOGIN}>Есть аккаунт?</StLink>
    </StFormFooter>
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StContainer alignItems="center" padding="0 40">
        <Form
          title="Регистрация"
          fields={registrationConfig}
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
export default RegistrationPage;
