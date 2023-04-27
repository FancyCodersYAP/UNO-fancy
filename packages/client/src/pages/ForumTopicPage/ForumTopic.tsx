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
import useModal from 'hooks/useModal';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchForumTopicGetById } from '../../store/Forum/topicActions';
import { dateStringParse } from 'utils/dateStringParse';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const ForumTopic = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchForumTopicGetById(id));
    }
  }, []);
  const TopicContent = useAppSelector(state => state.FORUM.currentTopic);
  const messages = [];

  console.log(TopicContent);
  if (!TopicContent) return <></>;
  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTopic>
        <StUser>
          <StUserAvatar image={TopicContent.user.avatar} />
          <StUserInfo>
            <StUserName>{TopicContent.user.display_name}</StUserName>
            <StUserRank>{testTopicData.rank}</StUserRank>
          </StUserInfo>
        </StUser>
        <StTopicWrapper>
          <StTopicNameContainer>
            <StTopicName>{TopicContent.name}</StTopicName>
          </StTopicNameContainer>
          <StTopicText>
            {TopicContent.description}
            <StTopicDate>
              тема создана: {dateStringParse(TopicContent.created_at)}
            </StTopicDate>
          </StTopicText>
        </StTopicWrapper>
      </StTopic>

      <StTopicDiscussion>
        {TopicContent.messages.map(message => (
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
