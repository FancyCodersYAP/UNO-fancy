
import Button from 'components/Button';
import { StFormFooter } from 'components/Form/style';

import { profileConfig } from './profile-config';
import { LoginFormParams } from '../RegistrationPage/RegistrationPage';

import { StyledForm, StAvatar, StUserName, fieldListCss } from './style';
import defaultAvatar from './img/defaultAvatar.svg';

const USER = {
  avatar: '',
  name: 'User',
};

const footer = (
  <StFormFooter>
    <Button text="Зарегистрироваться" type="submit" primary block />
  </StFormFooter>
);

const ProfilePage = () => {
  const avatar = <StAvatar image={USER.avatar || defaultAvatar}/>;
  const name = <StUserName>{USER.name}</StUserName>;

  const updateData = async (data: LoginFormParams): Promise<any> => {
    console.log(data);
  };

  return (
    <StyledForm
      title={name}
      avatar={avatar}
      fields={profileConfig}
      fieldListCss={fieldListCss}
      handleFormSubmit={updateData}
      footer={footer}
    />
  )
};

export default ProfilePage;
