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
  StAvatarError,
} from './style';
import { userState } from 'hooks/userState';
import { REDIRECT_URL } from 'store/constants';
import formatBytes from 'utils/formatBytes';
import { css } from 'styled-components';

const API_RESOURCES = `${REDIRECT_URL}/api/v2/resources`;
const MAX_FILE_SIZE = 1048576;

const buttontStyles = css`
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  width: 372px;
`;

interface AvatarModal {
  handleCloseModal: () => void;
}

const AvatarModalWindow = ({ handleCloseModal }: AvatarModal) => {
  const dispatch = useAppDispatch();
  const { user } = userState();

  let avatarFile: File;
  const onAvatarChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files) {
      return;
    }

    avatarFile = evt.target.files[0];

    const avatarError = document.querySelector('#avatarError') as HTMLElement;

    const size = avatarFile.size;
    if (size > MAX_FILE_SIZE) {
      const sizeKb = formatBytes(size);
      avatarError.textContent = `размер файла ${sizeKb} допустимый не более 1Мб`;
      return;
    }
    avatarError.textContent = '';

    const avatar = document.querySelector('#userAvatar') as HTMLElement;
    if (avatar) {
      const reader = new FileReader();
      reader.onload = (function (img) {
        return function (event) {
          img.style.backgroundImage = `url('${event.target?.result}')`;
        };
      })(avatar);
      reader.readAsDataURL(avatarFile);
    }
  };

  const onSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!avatarFile) {
      return handleCloseModal();
    }

    const formData = new FormData();
    formData.append('avatar', avatarFile);
    dispatch(fetchAvatarChange(formData));
    handleCloseModal();
  };

  return (
    <StAvatarContainer onSubmit={onSubmit}>
      <StAvatarInput
        name="avatarFile"
        type="file"
        id="avatarFile"
        onChange={onAvatarChange}
      />
      <StAvatarInputWrapper>
        <StAvatarLabel htmlFor="avatarFile">Выбрать файл</StAvatarLabel>
        <StAvatarError id="avatarError"></StAvatarError>
      </StAvatarInputWrapper>
      <StAvatar
        id="userAvatar"
        css={avatarStyles}
        image={API_RESOURCES + user?.avatar}
      />
      <Button css={buttontStyles} type="submit" text="Установить фотографию" />
    </StAvatarContainer>
  );
};

export default AvatarModalWindow;
