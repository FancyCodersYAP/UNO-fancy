import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import Button from 'components/Button/Button';
import TopicMessage from './TopicMessage';
import { testTopicData } from 'data/testTopicData';
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
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ReactComponentElement, useEffect, useRef } from 'react';
import { fetchForumTopicGetById } from '../../store/Forum/topicActions';
import { dateStringParse } from 'utils/dateStringParse';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const addAnswerModalStyles = css`
  width: 700px;
  padding: 56px 90px 70px;
`;

const ForumTopic = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { topicId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (topicId) {
      dispatch(fetchForumTopicGetById(topicId));
    }
  }, []);
  const TopicContent = useAppSelector(state => state.FORUM.currentTopic);
  const feedRef = useRef<HTMLDivElement>(null);
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

      <StTopicDiscussion ref={feedRef}>
        {TopicContent.messages.map(message => (
          <TopicMessage
            key={message.id}
            {...message}
            onClick={handleOpenModal}
          />
        ))}
      </StTopicDiscussion>

      <Button text="Написать сообщение" onClick={handleOpenModal} />

      {isOpen && (
        <Modal
          title="Сообщение"
          styles={addAnswerModalStyles}
          handleCloseModal={handleCloseModal}
          canBeClosedOutside>
          <AddAnswer
            feedRef={feedRef}
            handleCloseModal={handleCloseModal}
            topicId={Number(topicId)}
          />
        </Modal>
      )}
    </StBoard>
  );
};

export default ForumTopic;
