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
  message: string;
  date: string;
  clickOnMessageButton: (evt: React.SyntheticEvent<HTMLElement>) => void;
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
  message,
  date,
  clickOnMessageButton,
}: TopicMessage) => {
  return (
    <StMessage id={String(id)} data-message={id} onClick={clickOnMessageButton}>
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
              {answer.name}: "{stringShorten(answer.message, MAX_ANSWER_LENGTH)}
              "
            </StAnswer>
          )}
          <StMessageText>{message}</StMessageText>
        </div>

        <StButtonReply disignType="secondary">ответить</StButtonReply>
        <StTopicDate>тема создана: {date}</StTopicDate>
      </StMessageWrapper>
    </StMessage>
  );
};

export default TopicMessage;
