import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import Button from 'components/Button/Button';
import TopicMessage from './TopicMessage';
import { testTopicData } from 'data/testTopicData';
import { testTopicDiscussionData } from 'data/testTopicDiscussionData';
import { css } from 'styled-components';
import {
  StTopic,
  StUser,
  StUserInfo,
  StUserAvatar,
  StUserName,
  StUserRank,
  StTopicWrapper,
  StTopicNameContainer,
  StTopicName,
  stBoardStyle,
  StTopicText,
  StTopicDate,
  StTopicDiscussion,
} from './style';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import AddAnswer from 'components/AddAnswer/AddAnswer';
import { StModalTitle } from 'components/Modal/style';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

export const addAnswerModalStyles = css`
  width: 700px;
  padding: 56px 90px 70px;

  ${StModalTitle} {
    margin-bottom: 37px;
  }
`;

const ForumTopic = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTopic>
        <StUser>
          <StUserAvatar image={testTopicData.avatar} />
          <StUserInfo>
            <StUserName>{testTopicData.author}</StUserName>
            <StUserRank>{testTopicData.rank}</StUserRank>
          </StUserInfo>
        </StUser>
        <StTopicWrapper>
          <StTopicNameContainer>
            <StTopicName>{testTopicData.topicName}</StTopicName>
          </StTopicNameContainer>
          <StTopicText>
            {testTopicData.messages}
            <StTopicDate>тема создана: {testTopicData.date}</StTopicDate>
          </StTopicText>
        </StTopicWrapper>
      </StTopic>

      <StTopicDiscussion>
        {testTopicDiscussionData.map(message => (
          <TopicMessage key={message.id} {...message} />
        ))}
      </StTopicDiscussion>

      <Button text="Написать сообщение" onClick={handleOpenModal} />

      {isOpen && (
        <Modal title="Сообщение" styles={addAnswerModalStyles}>
          <AddAnswer handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </StBoard>
  );
};

export default ForumTopic;
