import { StAvatar } from 'pages/ProfilePage/style';
import { fetchAvatarChange } from 'store/User/profile/actions';
import { useAppDispatch } from 'hooks/redux';
import Button from 'components/Button/Button';
import {
  avatarStyles,
  StAvatarContainer,
  StAvatarInputWrapper,
  StAvatarInput,
  StAvatarLabel,
} from './style';
import { userState } from 'hooks/userState';
import { REDIRECT_URL } from 'store/constants';

const API_RESOURCES = `${REDIRECT_URL}/api/v2/resources`;

interface AvatarModal {
  handleCloseModal: () => void;
}

const AvatarModalWindow = ({ handleCloseModal }: AvatarModal) => {
  const dispatch = useAppDispatch();
  const { user } = userState();

  const onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      dispatch(fetchAvatarChange(formData));
    }
  };

  return (
    <StAvatarContainer>
      <StAvatarInputWrapper>
        <StAvatarInput
          name="avatarFile"
          type="file"
          id="avatarFile"
          onChange={onAvatarChange}
          multiple
        />
        <StAvatarLabel htmlFor="avatarFile">Выберите файл</StAvatarLabel>
      </StAvatarInputWrapper>
      <StAvatar css={avatarStyles} image={API_RESOURCES + user?.avatar} />
      <Button onClick={handleCloseModal} text="Установить фотографию" />
    </StAvatarContainer>
  );
};

export default AvatarModalWindow;
