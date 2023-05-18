import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';
import {
  StSaveButton,
  StUserName,
  StyledForm,
  inputCss,
  StButtonBackIcon,
  stFlexStyles,
  StButtonBackToProfile,
} from './style';
import { useAppDispatch } from 'hooks/redux';
import { userState } from 'hooks/userState';
import ProfileAvatar from './ProfileAvatar';
import { UserType } from 'types';
import { profileConfig } from '../configs';
import { fetchProfileChange } from 'store/User/profile/actions';
import { StFlex } from 'styles/global';
import { TITLES, useTitle } from 'utils/useTitle';
import { errorReset } from '../../store/User/userSlice';

const EditProfile: FC = () => {
  useTitle(TITLES.editProfile);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToProfile = () => {
    navigate(`${AppRoute.PROFILE}`);
  };

  const { user, userError } = userState();

  const avatar = <ProfileAvatar image={user!.avatar} />;
  const title = <StUserName>{user!.first_name}</StUserName>;
  const footer = <StSaveButton text="Сохранить" type="submit" />;

  const updateData = (data: DataType) => {
    dispatch(fetchProfileChange(data)).then(action => {
      if ('error' in action && action.error) return;
    });
  };

  const defaultValues: Record<string, string> = {};
  profileConfig.map(el => {
    return (defaultValues[el.name] = user![el.name as keyof UserType]);
  });

  const errorCancel = () => {
    if (userError) dispatch(errorReset());
  };

  return (
    <StFlex css={stFlexStyles}>
      <StButtonBackToProfile onClick={navigateToProfile}>
        <StButtonBackIcon>
          <use href="/assets/icons/icons_sprite.svg#icon-back"></use>
        </StButtonBackIcon>
      </StButtonBackToProfile>
      <StyledForm
        title={title}
        avatar={avatar}
        fields={profileConfig}
        handleFormSubmit={updateData}
        defaultValues={defaultValues}
        footer={footer}
        inputCss={inputCss}
        error={userError}
        errorReset={errorCancel}
      />
    </StFlex>
  );
};

export default EditProfile;
