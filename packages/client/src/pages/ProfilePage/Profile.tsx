import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserType } from 'types';
import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';

import { profileConfig } from '../configs';

import { StUserName, StSaveButton, StyledForm, inputCss } from './style';
import ProfileFooter from './ProfileFooter';
import { useAppDispatch } from '../../hooks/redux';
import { userState } from '../../hooks/userState';
import { fetchProfileChange } from '../../store/User/profile/actions';
import ProfileAvatar from './ProfileAvatar';
import { fetchLogout } from '../../store/User/auth/actions';
import { TITLES, useTitle } from 'utils/useTitle';

const Profile: FC = () => {
  useTitle(TITLES.profile);
  const [isEditMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = userState();

  const avatar = <ProfileAvatar image={user!.avatar} />;
  const title = <StUserName>{user?.first_name}</StUserName>;

  const handleChangeData = () => {
    setEditMode(true);
  };

  const handleChangePassword = () => {
    navigate(`${AppRoute.PROFILE}/password`);
  };

  const updateData = (data: DataType) => {
    dispatch(fetchProfileChange(data)).then(action => {
      if ('error' in action && action.error) return;
      setEditMode(false);
    });
  };

  const fields = profileConfig.map(field => ({
    disabled: !isEditMode,
    ...field,
  }));

  const defaultValues: Record<string, string> = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: user![name as keyof UserType] }),
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
      handleFormSubmit={updateData}
      defaultValues={defaultValues}
      footer={footer}
      inputCss={inputCss}
    />
  );
};

export default Profile;
