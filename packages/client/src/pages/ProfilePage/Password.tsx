import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';

import { passwordConfig } from '../configs';

import { StSaveButton, StUserName, StyledForm } from './style';
import { useAppDispatch } from '../../hooks/redux';
import { fetchPassChange } from '../../store/User/profile/actions';
import { userState } from '../../hooks/userState';
import ProfileAvatar from './ProfileAvatar';

const Password: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = userState();

  const changePassword = (data: DataType) => {
    dispatch(fetchPassChange(data)).then(action => {
      if ('error' in action && action.error) return;
      navigate(AppRoute.PROFILE);
    });
  };

  const avatar = <ProfileAvatar image={user!.avatar} />;
  const title = <StUserName>{user!.first_name}</StUserName>;
  const footer = <StSaveButton text="Сохранить" type="submit" />;

  return (
    <StyledForm
      title={title}
      avatar={avatar}
      fields={passwordConfig}
      handleFormSubmit={changePassword}
      footer={footer}
      inputClassName={'profile_input'}
    />
  );
};

export default Password;
