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
import { dateStringParse } from 'utils/dateStringParse';
import { IUserForum } from 'store/types';
import { useAppSelector } from 'hooks/redux';
import { useState, useEffect } from 'react';
import { Answer } from 'types';

const MAX_ANSWER_LENGTH = 20;

export interface ITopicMessage {
  id: number;
  topic_id: number;
  user: IUserForum;
  clickOnMessageButton: (evt: React.SyntheticEvent<HTMLElement>) => void;
  content: string;
  created_at: string;
  id_head_answer?: number;
}

const flexStyles = css`
  flex-direction: row;
  align-items: start;
`;

const TopicMessage = ({
  id,
  user,
  content,
  created_at,
  id_head_answer,
  clickOnMessageButton,
}: ITopicMessage) => {
  const TopicContent = useAppSelector(state => state.FORUM.currentTopic);
  const [askMessageInfo, setAskMessageInfo] = useState<Answer>();

  useEffect(() => {
    const messageInfo = TopicContent?.messages.filter(
      el => el.id === id_head_answer
    )[0];

    if (messageInfo) {
      const info = {
        user: messageInfo.user.display_name,
        message: messageInfo.content,
      };

      setAskMessageInfo(info);
    }
  }, []);

  return (
    <StMessage id={String(id)} data-message={id} onClick={clickOnMessageButton}>
      <StUser css={flexStyles}>
        <StMessageAvatar image={user.avatar} />
        <StUserInfo>
          <StUserName>{user.display_name}</StUserName>
          <StUserRank>{user.rank}</StUserRank>
        </StUserInfo>
      </StUser>

      <StMessageWrapper>
        <div>
          {askMessageInfo && (
            <StAnswer href={`#${id_head_answer}`}>
              {askMessageInfo.user}: "
              {stringShorten(askMessageInfo.message, MAX_ANSWER_LENGTH)}"
            </StAnswer>
          )}
          <StMessageText>{content}</StMessageText>
        </div>

        <StButtonReply disignType="secondary">ответить</StButtonReply>
        <StTopicDate>сообщение от: {dateStringParse(created_at)}</StTopicDate>
      </StMessageWrapper>
    </StMessage>
  );
};

export default TopicMessage;
