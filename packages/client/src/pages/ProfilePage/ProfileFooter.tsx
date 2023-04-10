import { FC } from 'react';

import { StFlex } from 'styles/global';

import { StFooterButton, StQuitButton } from './style';
import { ProfileFooterProps } from './types';
import { fetchLogout } from '../../store/User/auth/actions';
import { useAppDispatch } from '../../hooks/redux';

const ProfileFooter: FC<ProfileFooterProps> = ({
  handleChangeData,
  handleChangePassword,
}) => {
  const dispatch = useAppDispatch();

  const logout = async () => {
    dispatch(fetchLogout());
  };
  return (
    <>
      <StFlex justifyContent="space-between">
        <StFooterButton text="Изменить данные" onClick={handleChangeData} />
        <StFooterButton text="Изменить пароль" onClick={handleChangePassword} />
      </StFlex>
      <StQuitButton
        text="Выйти"
        type="button"
        disignType="secondary"
        onClick={logout}
      />
    </>
  );
};

export default ProfileFooter;
