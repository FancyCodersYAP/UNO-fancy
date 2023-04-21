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

type Answer = {
  askingId: number;
  name: string;
  message: string;
};

interface TopicMessage {
  id: number;
  avatar?: string;
  author: string;
  rank: string;
  answer?: Answer;
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
}: TopicMessage) => {
  return (
    <StMessage id={String(id)} data-message={id}>
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
            <StAnswer href={`#${answer.askingId}`}>
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
