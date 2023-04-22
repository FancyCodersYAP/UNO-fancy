import { StAvatar } from './style';
import { StFlex } from '../../styles/global';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AvatarModalWindow from 'components/AvatarModalWindow';

interface IAvatar {
  image: string | undefined;
}

const API_RESOURCES = 'https://ya-praktikum.tech/api/v2/resources/';

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
          handleCloseModal={handleCloseModal}
          canBeClosedOutside>
          <AvatarModalWindow
            avatar={avatar}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </StFlex>
  );
};
export default ProfileAvatar;
