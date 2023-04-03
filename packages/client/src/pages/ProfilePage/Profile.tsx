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
  inputCss
} from './style';
import ProfileFooter from './ProfileFooter';
import { useAppDispatch } from '../../hooks/redux';
import { authState } from '../../hooks/authState';
import { fetchRegistration } from '../../store/auth/actions';
import { fetchProfileChange } from '../../store/user/actions';
import { RegFormParams } from '../RegistrationPage/RegistrationPage';
import { userDataSet } from '../../store/auth/authSlice';

export const USER: UserType = {
  avatar: 'https://i.pravatar.cc/300',
  first_name: 'Ivan',
  second_name: 'Ivanov',
  login: 'MyFirestUser',
  email: 'mail@mail.com',
  phone: '+79269269696'
};

const Profile: FC = () => {
  const [isEditMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { authError, user } = authState();


  const avatar = <StAvatar image={USER?.avatar} />;
  const title = <StUserName>{user?.first_name}</StUserName>;

  const handleChangeData = () => {
    setEditMode(true);
  };

  const handleChangePassword = () => {
    navigate(`${AppRoute.PROFILE}/password`);
  };

  const updateData = async (data: DataType): Promise<void> => {
    await dispatch(fetchProfileChange(data));
    setEditMode(false);
  };

  const logout = async () => {
    console.log('LOGOUT');
  };

  const fields = profileConfig.map(field => ({
    disabled: !isEditMode,
    ...field
  }));

  const defaultValues: Record<string, string> = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: user![name as keyof UserType] }),
    {}
  );

  const footer = isEditMode ? (
    <StSaveButton text='Сохранить' type='submit' />
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
