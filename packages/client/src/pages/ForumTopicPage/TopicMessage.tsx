import { css } from 'styled-components';
import { StButtonReply } from 'components/Button/style';
import stringReduction from 'utils/stringReduction';
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

const MAX_ANSWER_LENGTH = 20;

type AnswerType = {
  asking_id: number;
  name: string;
  message: string;
};

interface TopicMessageType {
  id: number;
  avatar?: string;
  author: string;
  rank: string;
  answer?: AnswerType;
  messages: string;
  date: string;
  onClick?: () => void;
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
  onClick,
}: TopicMessageType) => {
  return (
    <StMessage id={`${id}`} data-message={id}>
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
            <StAnswer href={`#${answer.asking_id}`}>
              {answer.name}: "
              {stringReduction(answer.message, MAX_ANSWER_LENGTH)}"
            </StAnswer>
          )}
          <StMessageText>{messages}</StMessageText>
        </div>

        <StButtonReply onClick={onClick} disignType="secondary">
          ответить
        </StButtonReply>
        <StTopicDate>тема создана: {date}</StTopicDate>
      </StMessageWrapper>
    </StMessage>
  );
};

export default TopicMessage;
