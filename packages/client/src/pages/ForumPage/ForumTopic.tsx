import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import stringReduction from 'utils/stringReduction';
import { StTableTr, StTableTd } from './style';
import { css } from 'styled-components';

interface ForumTopicType {
  number: number;
  topic: string;
  total_messages: number;
  author: string;
  last_message: string;
}

const MAX_TOPIC_LENGTH = 68;
const MAX_LAST_MESSAGE_LENGTH = 60;

const textAlignLeft = css`
  text-align: left;
`;

const fontStyle = css`
  ${textAlignLeft}
  font-size: 16px;
  line-height: 130%;
`;

const ForumTopic = ({
  number,
  topic,
  total_messages,
  author,
  last_message,
}: ForumTopicType) => {
  topic = stringReduction(topic, MAX_TOPIC_LENGTH);
  last_message = stringReduction(last_message, MAX_LAST_MESSAGE_LENGTH);

  const navigate = useNavigate();
  const navigateToTopic = () => {
    console.log('Переход на тему: ' + number);
    navigate(`${AppRoute.FORUM}/${number}`);
  };

  return (
    <StTableTr onClick={navigateToTopic}>
      <StTableTd>{number}</StTableTd>
      <StTableTd css={textAlignLeft}>{topic}</StTableTd>
      <StTableTd>{total_messages}</StTableTd>
      <StTableTd>{author}</StTableTd>
      <StTableTd css={fontStyle}>{last_message}</StTableTd>
    </StTableTr>
  );
};

export default ForumTopic;
