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
  StButtonBackIcon,
  StButtonBackToForum,
  StTopicDiscussionEmpty,
} from './style';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import AddAnswer from 'components/AddAnswer/AddAnswer';
import { StModalTitle } from 'components/Modal/style';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect, useRef } from 'react';
import { fetchForumTopicGetById } from 'store/Forum';
import { dateStringParse } from 'utils/dateStringParse';
import { AddAnswerModalUserInfo } from 'types';
import { useTitle } from 'utils/useTitle';

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
  // TODO: заменить тестовые данные на данные с сервера
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [userInfo, setUserInfo] = useState<AddAnswerModalUserInfo>();
  const { topicId } = useParams();

  const navigate = useNavigate();
  const navigateToForum = () => {
    navigate(`${AppRoute.FORUM}`);
  };

  const dispatch = useAppDispatch();

  const TopicContent = useAppSelector(state => state.FORUM.currentTopic);

  TopicContent && useTitle(TopicContent.name);

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
        <StButtonBackToForum onClick={navigateToForum}>
          <StButtonBackIcon>
            <use href="/assets/icons/icons_sprite.svg#icon-back"></use>
          </StButtonBackIcon>
          назад к темам
        </StButtonBackToForum>
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

      {TopicContent.messages.length !== 0 ? (
        <StTopicDiscussion ref={feedRef}>
          {TopicContent.messages.map(message => (
            <TopicMessage
              key={message.id}
              {...message}
              clickOnMessageButton={clickOnMessageButton}
            />
          ))}
        </StTopicDiscussion>
      ) : (
        <StTopicDiscussionEmpty>
          Пока еще никто не успел ответить на данную тему, будь первым!
        </StTopicDiscussionEmpty>
      )}

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
