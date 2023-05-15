import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import Button from 'components/Button/Button';
import TopicMessage from './TopicMessage';
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
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect, useRef } from 'react';
import { fetchForumTopicGetById } from 'store/Forum';
import { dateStringParse } from 'utils/dateStringParse';
import { AddAnswerModalUserInfo } from 'types';

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
  const [userInfo, setUserInfo] = useState<AddAnswerModalUserInfo>();
  const { topicId } = useParams();
  const dispatch = useAppDispatch();

  const TopicContent = useAppSelector(state => state.FORUM.currentTopic);
  console.log(TopicContent?.messages);

  const clickOnMessageButton = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    const answerButton = target.closest('button');

    if (answerButton) {
      const messageElement = answerButton.closest('article');
      const messageId = messageElement?.dataset.message;

      if (TopicContent) {
        const messageInfo = TopicContent.messages.filter(
          el => el.id === Number(messageId)
        )[0];

        const info = {
          id: messageInfo.id,
          user: messageInfo.user.display_name,
          message: messageInfo.content,
        };

        setUserInfo(info);
      }

      handleOpenModal();
    }
  };

  const handelReplyToTopic = () => {
    setUserInfo(undefined);
    handleOpenModal();
  };

  useEffect(() => {
    if (topicId) {
      dispatch(fetchForumTopicGetById(topicId));
    }
  }, []);

  const feedRef = useRef<HTMLDivElement | null>(null);
  if (!TopicContent) return <></>;

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTopic>
        <StUser>
          <StUserAvatar image={TopicContent.user.avatar} />
          <StUserInfo>
            <StUserName>{TopicContent.user.display_name}</StUserName>
            <StUserRank>{TopicContent.user.rank}</StUserRank>
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
            clickOnMessageButton={clickOnMessageButton}
          />
        ))}
      </StTopicDiscussion>

      <Button text="Написать сообщение" onClick={handelReplyToTopic} />

      {isOpen && (
        <Modal title="Сообщение" styles={addAnswerModalStyles}>
          <AddAnswer
            feedRef={feedRef}
            handleCloseModal={handleCloseModal}
            topicId={Number(topicId)}
            userInfo={userInfo}
          />
        </Modal>
      )}
    </StBoard>
  );
};

export default ForumTopic;
