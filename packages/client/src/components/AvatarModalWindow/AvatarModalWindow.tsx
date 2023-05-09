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
import formatBytes from 'utils/formatBytes';
import { css } from 'styled-components';
import { useRef } from 'react';

const MAX_FILE_SIZE = 1048576;

const buttontStyles = css`
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  width: 372px;
`;

interface AvatarModal {
  handleCloseModal: () => void;
  image: string | undefined;
}

const AvatarModalWindow = ({ handleCloseModal, image }: AvatarModal) => {
  const dispatch = useAppDispatch();

  const avatarErrorRef = useRef<HTMLDivElement>(null);
  const userAvatarRef = useRef<HTMLDivElement>(null);

  let avatarFile: File;
  const onAvatarChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files) {
      return;
    }

    avatarFile = evt.target.files[0];

    const avatarError = avatarErrorRef.current;

    const size = avatarFile.size;

    if (avatarError) {
      if (size > MAX_FILE_SIZE) {
        const sizeKb = formatBytes(size);
        avatarError.textContent = `размер файла ${sizeKb} допустимый не более 1Мб`;
        return;
      }
      avatarError.textContent = '';
    }

    const avatar = userAvatarRef.current;
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
      return;
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
        accept="image/png, image/gif, image/jpeg"
      />
      <StAvatarInputWrapper>
        <StAvatarLabel htmlFor="avatarFile">Выбрать файл</StAvatarLabel>
        <StAvatarError ref={avatarErrorRef}></StAvatarError>
      </StAvatarInputWrapper>
      <StAvatar ref={userAvatarRef} css={avatarStyles} image={image} />
      <Button css={buttontStyles} type="submit" text="Установить фотографию" />
    </StAvatarContainer>
  );
};

export default AvatarModalWindow;
