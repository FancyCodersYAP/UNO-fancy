import { css } from 'styled-components';
import { StButtonReply } from 'components/Button/style';
import stringShorten from 'utils/stringShorten';
import {
  StUser,
  StUserInfo,
  StUserName,
  StUserRank,
  StMessage,
  StTopicDate,
  StMessageAvatar,
  StMessageWrapper,
  StMessageText,
  StAnswer,
} from './style';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AddAnswer from 'components/AddAnswer/AddAnswer';
import { addAnswerModalStyles } from './ForumTopic';

const MAX_ANSWER_LENGTH = 20;

type Answer = {
  askingId: number;
  name: string;
  message: string;
};

interface TopicMessage {
  id: number;
  avatar?: string;
  author: string;
  rank: string;
  answer?: Answer;
  messages: string;
  date: string;
}

const flexStyles = css`
  flex-direction: row;
  align-items: start;
`;

const TopicMessage = ({
  id,
  avatar,
  author,
  rank,
  answer,
  messages,
  date,
}: TopicMessage) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <StMessage id={String(id)} data-message={id}>
      <StUser css={flexStyles}>
        <StMessageAvatar image={avatar} />
        <StUserInfo>
          <StUserName>{author}</StUserName>
          <StUserRank>{rank}</StUserRank>
        </StUserInfo>
      </StUser>

      <StMessageWrapper>
        <div>
          {answer && (
            <StAnswer href={`#${answer.askingId}`}>
              {answer.name}: "{stringShorten(answer.message, MAX_ANSWER_LENGTH)}
              "
            </StAnswer>
          )}
          <StMessageText>{messages}</StMessageText>
        </div>

        <StButtonReply onClick={handleOpenModal} disignType="secondary">
          ответить
        </StButtonReply>
        <StTopicDate>тема создана: {date}</StTopicDate>
      </StMessageWrapper>

      {isOpen && (
        <Modal title={`Ответ ${author}`} styles={addAnswerModalStyles}>
          <AddAnswer handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </StMessage>
  );
};

export default TopicMessage;
