import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import Button from 'components/Button/Button';
import TopicMessage from './TopicMessage';
import { testTopicData } from 'assets/data/testTopicData';
import { testTopicDiscussionData } from 'assets/data/testTopicDiscussionData';
import { css } from 'styled-components';
import EmptyAvatar from 'assets/img/empty-avatar.png';
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
import useModal from 'utils/useModal';

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
          <StUserAvatar
            src={testTopicData.avatar || EmptyAvatar}
            alt={testTopicData.author}
          />
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
        {testTopicDiscussionData.map((message, index) => (
          <TopicMessage
            key={index + 1}
            id={index}
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
