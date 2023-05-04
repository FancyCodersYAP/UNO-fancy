import { StAvatar } from './style';
import { StFlex } from '../../styles/global';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AvatarModalWindow from 'components/AvatarModalWindow';
import { REDIRECT_URL } from '../../store/constants';
import { css } from 'styled-components';
import { StModalTitle } from 'components/Modal/style';

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

const API_RESOURCES = `${REDIRECT_URL}/api/v2/resources`;

const ProfileAvatar = ({ image }: IAvatar) => {
  const avatar = image && API_RESOURCES + image;

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
          <AvatarModalWindow handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </StFlex>
  );
};
export default ProfileAvatar;
