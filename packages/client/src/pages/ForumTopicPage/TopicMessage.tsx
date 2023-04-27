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
import { dateStringParse } from '../../utils/dateStringParse';

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
  user,
  rank,
  answer,
  content,
  created_at,
  onClick,
}: TopicMessage) => {
  return (
    <StMessage id={String(id)} data-message={id}>
      <StUser css={flexStyles}>
        <StMessageAvatar image={user.avatar} />
        <StUserInfo>
          <StUserName>{user.display_name}</StUserName>
          <StUserRank>{'игрок'}</StUserRank>
        </StUserInfo>
      </StUser>

      <StMessageWrapper>
        <div>
          {answer && (
            <StAnswer href={`#${answer.askingId}`}>
              {answer.name}: "{stringShorten(answer.message, MAX_ANSWER_LENGTH)}
              "
            </StAnswer>
          )}
          <StMessageText>{content}</StMessageText>
        </div>

        <StButtonReply onClick={onClick} disignType="secondary">
          ответить
        </StButtonReply>
        <StTopicDate>сообщение от: {dateStringParse(created_at)}</StTopicDate>
      </StMessageWrapper>
    </StMessage>
  );
};

export default TopicMessage;
