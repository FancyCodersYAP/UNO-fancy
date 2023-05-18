import stringShorten from 'utils/stringShorten';
import {
  StTableTopic,
  StTableCell,
  StDeleteTopicButton,
  StDeleteTopicIcon,
} from './style';
import { css } from 'styled-components';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import DeleteTopic from 'components/DeleteTopic';
import { StModalTitle } from 'components/Modal/style';
import { IUserForum } from 'store/types';

interface ForumTopicType {
  id: number;
  name: string;
  total_messages: number;
  user: IUserForum;
  last_message: string | null;
}

const MAX_TOPIC_LENGTH = 35;
const MAX_LAST_MESSAGE_LENGTH = 60;

const addTopicModalStyles = css`
  width: 700px;
  padding: 55px 101px 77px;

  ${StModalTitle} {
    margin-bottom: 62px;
  }
`;

const ForumTopic = ({
  id,
  name,
  user,
  total_messages,
  last_message,
}: ForumTopicType) => {
  last_message = last_message || '...';

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const topicInfo = {
    id,
    name,
  };

  return (
    <>
      <StTableTopic data-topic={id}>
        <StTableCell className="cell__button_hovered">
          <StDeleteTopicButton onClick={handleOpenModal}>
            <StDeleteTopicIcon>
              <use href="/assets/icons/icons_sprite.svg#icon-basket"></use>
            </StDeleteTopicIcon>
          </StDeleteTopicButton>
        </StTableCell>
        <StTableCell className="cell-content_left">
          <p>{stringShorten(name, MAX_TOPIC_LENGTH)}</p>
        </StTableCell>
        <StTableCell>
          <p>{total_messages}</p>
        </StTableCell>
        <StTableCell>
          <p>{user.display_name}</p>
        </StTableCell>
        <StTableCell className="cell-content_left cell__font_small">
          <p>{stringShorten(last_message, MAX_LAST_MESSAGE_LENGTH)}</p>
        </StTableCell>
      </StTableTopic>
      {isOpen && (
        <Modal title="Удалить тему?" styles={addTopicModalStyles}>
          <DeleteTopic
            topicInfo={topicInfo}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
};

export default ForumTopic;
