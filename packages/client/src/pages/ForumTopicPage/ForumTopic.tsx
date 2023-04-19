import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import Button from 'components/Button/Button';
import TopicMessage from './TopicMessage';
import { testTopicData } from 'data/testTopicData';
import { testTopicDiscussionData } from 'data/testTopicDiscussionData';
import { css } from 'styled-components';
import EmptyAvatar from '/assets/icons/default-avatar.svg';
import {
  StTopic,
  StUser,
  StUserInfo,
  StUserAvatar,
  StUserName,
  StUserRank,
  StTopicName,
  stBoardStyle,
  StTopicText,
  StTopicDate,
  StTopicDiscussion,
} from './style';
import useModal from 'hooks/useModal';

const marginBottom58px = css`
  margin: 0 0 58px;
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
        <div>
          <StTopicName>{testTopicData.topic_name}</StTopicName>
          <StTopicText>
            {testTopicData.messages}
            <StTopicDate>тема создана: {testTopicData.date}</StTopicDate>
          </StTopicText>
        </div>
      </StTopic>

      <StTopicDiscussion>
        {testTopicDiscussionData.map(message => (
          <TopicMessage
            key={message.id}
            {...message}
            onClick={handleOpenModal}
          />
        ))}
      </StTopicDiscussion>

      <Button text="Написать сообщение" onClick={handleOpenModal} />
    </StBoard>
  );
};

export default ForumTopic;
