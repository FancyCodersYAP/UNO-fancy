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
import { useState } from 'react';
import { UserInfo } from 'components/AddAnswer/AddAnswer';

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
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const clickOnMessageButon = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    const answerButton = target.closest('button');

    if (answerButton) {
      const messageElement = answerButton.closest('article');
      const messageId = messageElement?.dataset.message;
      const messageInfo = testTopicDiscussionData.filter(
        el => el.id === Number(messageId)
      )[0];

      const info = {
        id: messageInfo.id,
        author: messageInfo.author,
        message: messageInfo.message,
      };

      setUserInfo(info);
      handleOpenModal();
    }
  };

  const handelReplyToTopic = () => {
    setUserInfo(undefined);
    handleOpenModal();
  };

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
          <TopicMessage
            key={message.id}
            {...message}
            clickOnMessageButon={clickOnMessageButon}
          />
        ))}
      </StTopicDiscussion>

      <Button text="Написать сообщение" onClick={handelReplyToTopic} />

      {isOpen && (
        <Modal title="Сообщение" styles={addAnswerModalStyles}>
          <AddAnswer handleCloseTopic={handleCloseModal} userInfo={userInfo} />
        </Modal>
      )}
    </StBoard>
  );
};

export default ForumTopic;
