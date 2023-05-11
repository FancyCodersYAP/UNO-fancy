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

interface ForumTopicType {
  id: number;
  topic: string;
  total_messages: number;
  author: string;
  last_message: string;
}

const MAX_TOPIC_LENGTH = 35;
const MAX_LAST_MESSAGE_LENGTH = 60;

const textAlignLeft = css`
  text-align: left;
  justify-content: left;
`;

const fontStyle = css`
  ${textAlignLeft}
  font-size: 16px;
  line-height: 130%;
`;

const addTopicModalStyles = css`
  width: 700px;
  padding: 55px 101px 77px;

  ${StModalTitle} {
    margin-bottom: 62px;
  }
`;

const hoverStyle = css`
  button {
    cursor: pointer;
  }

  svg {
    opacity: 0.5;
  }

  svg:hover {
    opacity: 1;
  }
`;

const ForumTopic = ({
  id,
  topic,
  total_messages,
  author,
  last_message,
}: ForumTopicType) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const topicInfo = {
    id,
    topic,
  };

  return (
    <>
      <StTableTopic data-topic={id}>
        <StTableCell css={hoverStyle}>
          <StDeleteTopicButton onClick={handleOpenModal}>
            <StDeleteTopicIcon>
              <use href="/assets/icons/icons_sprite.svg#icon-basket"></use>
            </StDeleteTopicIcon>
          </StDeleteTopicButton>
        </StTableCell>
        <StTableCell css={textAlignLeft}>
          {stringShorten(topic, MAX_TOPIC_LENGTH)}
        </StTableCell>
        <StTableCell>{total_messages}</StTableCell>
        <StTableCell>{author}</StTableCell>
        <StTableCell css={fontStyle}>
          {stringShorten(last_message, MAX_LAST_MESSAGE_LENGTH)}
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
