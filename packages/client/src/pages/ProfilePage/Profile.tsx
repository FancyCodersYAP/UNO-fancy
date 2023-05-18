import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserType } from 'types';
import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';

import { profileConfig } from '../configs';

import { StUserName, StyledForm } from './style';
import ProfileFooter from './ProfileFooter';
import { useAppDispatch } from '../../hooks/redux';
import { userState } from '../../hooks/userState';
import { fetchProfileChange } from '../../store/User/profile/actions';
import ProfileAvatar from './ProfileAvatar';
import { TITLES, useTitle } from 'utils/useTitle';

const Profile: FC = () => {
  useTitle(TITLES.profile);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = userState();

  const avatar = <ProfileAvatar image={user!.avatar} />;
  const title = <StUserName>{user?.first_name}</StUserName>;

  const handleChangePassword = () => {
    navigate(`${AppRoute.PROFILE}/password`);
  };

  const handleEditProfile = () => {
    navigate(`${AppRoute.PROFILE}/edit`);
  };

  const updateData = (data: DataType) => {
    dispatch(fetchProfileChange(data)).then(action => {
      if ('error' in action && action.error) return;
    });
  };

  const fields = profileConfig.map(field => ({
    disabled: true,
    ...field,
  }));

  const defaultValues: Record<string, string> = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: user![name as keyof UserType] }),
    {}
  );

  const footer = (
    <ProfileFooter
      handleChangeData={handleEditProfile}
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
      inputClassName={'profile_input'}
    />
  );
};

export default Profile;
