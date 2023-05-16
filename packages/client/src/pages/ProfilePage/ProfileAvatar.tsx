import { StAvatar } from './style';
import { StFlex } from '../../styles/global';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AvatarModalWindow from 'components/AvatarModalWindow';
import { css } from 'styled-components';
import { StModalTitle } from 'components/Modal/style';
import { API_ENDPOINTS } from '../../store/constants';

const avatarModalStyles = css`
  width: 586px;
  padding: 48px 105px 67px;

  ${StModalTitle} {
    margin-bottom: 45px;
  }
`;

interface IAvatar {
  image: string | undefined;
}

const ProfileAvatar = ({ image }: IAvatar) => {
  const avatar = image && API_ENDPOINTS.resources + image;

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <StFlex flexDirection="column" alignItems="center">
      <label>
        <StAvatar onClick={handleOpenModal} image={avatar} />
      </label>
      {isOpen && (
        <Modal
          title="Изменить аватар"
          hasCrossButton
          handleCloseModal={handleCloseModal}
          styles={avatarModalStyles}>
          <AvatarModalWindow
            handleCloseModal={handleCloseModal}
            image={avatar}
          />
        </Modal>
      )}
    </StFlex>
  );
};
export default ProfileAvatar;
