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
import { IUserForum } from '../../store/types';

const MAX_ANSWER_LENGTH = 20;

type Answer = {
  id: number;
  user: IUserForum;
  name: string;
  content: string;
};

export interface ITopicMessage {
  id: number;
  topic_id: number;
  user: IUserForum;
  rank: string;
  answer?: Answer;
  content: string;
  created_at: string;
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
}: ITopicMessage) => {
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
            <StAnswer href={`#${answer.id}`}>
              {answer.user.display_name}: "
              {stringShorten(answer.content, MAX_ANSWER_LENGTH)}"
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
