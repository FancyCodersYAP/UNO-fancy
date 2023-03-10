import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserType } from 'types';
import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';

import { profileConfig } from '../configs';

import {
  StAvatar,
  StUserName,
  StSaveButton,
  StyledForm,
  inputCss,
} from './style';
import ProfileFooter from './ProfileFooter';

export const USER: UserType = {
  avatar: 'https://i.pravatar.cc/300',
  first_name: 'Ivan',
  second_name: 'Ivanov',
  login: 'MyFirestUser',
  email: 'mail@mail.com',
  phone: '+79269269696',
};

const Profile: FC = () => {
  const [isEditMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const avatar = <StAvatar image={USER?.avatar} />;
  const title = <StUserName>{USER?.first_name}</StUserName>;

  const handleChangeData = () => {
    setEditMode(true);
  };

  const handleChangePassword = () => {
    navigate(`${AppRoute.PROFILE}/password`);
  };

  const updateData = async (data: DataType): Promise<any> => {
    console.log(data);
    setEditMode(false);
  };

  const logout = async () => {
    console.log('LOGOUT');
  };

  const fields = profileConfig.map(field => ({
    disabled: !isEditMode,
    ...field,
  }));

  const defaultValues: Record<string, string> = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: USER[name as keyof UserType] }),
    {}
  );

  const footer = isEditMode ? (
    <StSaveButton text="Сохранить" type="submit" />
  ) : (
    <ProfileFooter
      handleChangeData={handleChangeData}
      handleChangePassword={handleChangePassword}
    />
  );

  return (
    <StyledForm
      title={title}
      avatar={avatar}
      fields={fields}
      handleFormSubmit={isEditMode ? updateData : logout}
      defaultValues={defaultValues}
      footer={footer}
      inputCss={inputCss}
    />
  );
};

export default Profile;
