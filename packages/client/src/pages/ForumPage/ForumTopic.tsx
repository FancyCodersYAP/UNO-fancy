import stringReduction from 'utils/stringReduction';
import { StTableColumn, StTableCell } from './style';
import { css } from 'styled-components';

interface ForumTopicType {
  id: number;
  topic: string;
  total_messages: number;
  author: string;
  last_message: string;
  onClick: (evt: React.SyntheticEvent<HTMLElement>) => void;
}

const MAX_TOPIC_LENGTH = 68;
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
  onClick,
}: ForumTopicType) => {
  topic = stringReduction(topic, MAX_TOPIC_LENGTH);
  last_message = stringReduction(last_message, MAX_LAST_MESSAGE_LENGTH);

  return (
    <StTableColumn onClick={onClick} data-topic={id}>
      <StTableCell>{id}</StTableCell>
      <StTableCell css={cursourPointer}>{topic}</StTableCell>
      <StTableCell>{total_messages}</StTableCell>
      <StTableCell>{author}</StTableCell>
      <StTableCell css={fontStyle}>{last_message}</StTableCell>
    </StTableColumn>
  );
};

export default ForumTopic;
