import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';
import { passwordConfig } from '../configs';
import {
  StSaveButton,
  StUserName,
  StyledForm,
  inputCss,
  StButtonBackIcon,
  stFlexStyles,
  StButtonBackToProfile,
} from './style';
import { useAppDispatch } from '../../hooks/redux';
import { fetchPassChange } from '../../store/User/profile/actions';
import { userState } from '../../hooks/userState';
import ProfileAvatar from './ProfileAvatar';
import { StFlex } from 'styles/global';

const Password: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = userState();

  const navigateToProfile = () => {
    navigate(`${AppRoute.PROFILE}`);
  };

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
    <StFlex css={stFlexStyles}>
      <StButtonBackToProfile onClick={navigateToProfile}>
        <StButtonBackIcon>
          <use href="/assets/icons/icons_sprite.svg#icon-back"></use>
        </StButtonBackIcon>
      </StButtonBackToProfile>
      <StyledForm
        title={title}
        avatar={avatar}
        fields={passwordConfig}
        handleFormSubmit={changePassword}
        footer={footer}
        inputCss={inputCss}
      />
    </StFlex>
  );
};

export default Password;
