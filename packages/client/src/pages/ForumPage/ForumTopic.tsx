import stringReduction from 'utils/stringReduction';
import { StTableTopic, StTableCell } from './style';
import { css } from 'styled-components';

interface ForumTopicType {
  id: number;
  topic: string;
  total_messages: number;
  author: string;
  last_message: string;
}

const MAX_TOPIC_LENGTH = 55;
const MAX_LAST_MESSAGE_LENGTH = 60;

const textAlignLeft = css`
  text-align: left;
  justify-content: left;
`;

const fontStyle = css`
  ${textAlignLeft}
  font-size: 16px;
  line-height: 130%;
`;

const cursourPointer = css`
  ${textAlignLeft}
`;

const ForumTopic = ({
  id,
  topic,
  total_messages,
  author,
  last_message,
}: ForumTopicType) => {
  topic = stringReduction(topic, MAX_TOPIC_LENGTH);
  last_message = stringReduction(last_message, MAX_LAST_MESSAGE_LENGTH);

  return (
    <StTableTopic data-topic={id}>
      <StTableCell>{id}</StTableCell>
      <StTableCell css={cursourPointer}>{topic}</StTableCell>
      <StTableCell>{total_messages}</StTableCell>
      <StTableCell>{author}</StTableCell>
      <StTableCell css={fontStyle}>{last_message}</StTableCell>
    </StTableTopic>
  );
};

export default ForumTopic;
