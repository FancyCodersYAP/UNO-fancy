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
  answer?: Answer;
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
  answer,
  content,
  created_at,
  clickOnMessageButton,
}: ITopicMessage) => {
  // const TopicContent = useAppSelector(state => state.FORUM.currentTopic);
  // const [askMessageInfo, setAskMessageInfo] = useState<Answer>();
  //
  // useEffect(() => {
  //   const messageInfo = TopicContent?.messages.filter(
  //     el => el.id === id_head_answer
  //   )[0];
  //
  //   if (messageInfo) {
  //     const info = {
  //       user: messageInfo.user.display_name,
  //       message: messageInfo.content,
  //     };
  //
  //     setAskMessageInfo(info);
  //   }
  // }, []);

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
          {answer && (
            <StAnswer href={`#${answer.id}`}>
              {answer.user.display_name}: "
              {stringShorten(answer.content, MAX_ANSWER_LENGTH)}"
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
