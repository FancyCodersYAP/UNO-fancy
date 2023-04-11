import { css } from 'styled-components';
import { StButtonReply } from 'components/Button/style';
import EmptyAvatar from 'assets/img/empty-avatar.png';
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
} from './style';

interface TopicMessageType {
  id: number;
  avatar?: string;
  author: string;
  rank: string;
  answer?: boolean;
  messages: string;
  date: string;
  onClick?: () => void;
}

const flexDirectionRow = css`
  flex-direction: row;
`;

const marginLeft = css`
  margin-left: 20px;
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
    <StMessage css={answer ? marginLeft : ''} data-message={id}>
      <StUser css={flexDirectionRow}>
        <StMessageAvatar src={avatar || EmptyAvatar} alt={author} />
        <StUserInfo>
          <StUserName>{author}</StUserName>
          <StUserRank>{rank}</StUserRank>
        </StUserInfo>
      </StUser>

      <StMessageWrapper>
        <StMessageText>{messages}</StMessageText>
        <StButtonReply onClick={onClick} disignType="secondary">
          ответить
        </StButtonReply>
        <StTopicDate>тема создана: {date}</StTopicDate>
      </StMessageWrapper>
    </StMessage>
  );
};

export default TopicMessage;
