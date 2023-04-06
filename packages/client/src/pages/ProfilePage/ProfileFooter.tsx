import { FC } from 'react';

import { StFlex } from 'styles/global';

import { StFooterButton, StQuitButton } from './style';
import { ProfileFooterProps } from './types';

const ProfileFooter: FC<ProfileFooterProps> = ({
  handleChangeData,
  handleChangePassword,
}) => (
  <>
    <StFlex justifyContent="space-between">
      <StFooterButton text="Изменить данные" onClick={handleChangeData} />
      <StFooterButton text="Изменить пароль" onClick={handleChangePassword} />
    </StFlex>
    <StQuitButton text="Выйти" type="submit" disignType="secondary" />
  </>
);

export default ProfileFooter;
