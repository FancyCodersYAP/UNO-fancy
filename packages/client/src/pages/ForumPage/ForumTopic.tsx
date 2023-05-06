import stringShorten from 'utils/stringShorten';
import {
  StTableTopic,
  StTableCell,
  StDeleteTopicButton,
  StDeleteTopicIcon,
} from './style';
import { css } from 'styled-components';
import { IUserForum } from '../../store/types';

interface ForumTopicType {
  id: number;
  name: string;
  total_messages: number;
  user: IUserForum;
  last_message: string | null;
}

const MAX_TOPIC_LENGTH = 35;
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

const hoverStyle = css`
  button {
    cursor: pointer;
  }

  svg {
    opacity: 0.5;
  }

  svg:hover {
    opacity: 1;
  }
`;

const ForumTopic = ({
  id,
  name,
  user,
  total_messages,
  last_message,
}: ForumTopicType) => {
  name = stringShorten(name, MAX_TOPIC_LENGTH);
  last_message = stringShorten(last_message, MAX_LAST_MESSAGE_LENGTH);

  return (
    <StTableTopic data-topic={id}>
      <StTableCell css={hoverStyle}>
        <StDeleteTopicButton>
          <StDeleteTopicIcon>
            <use href="/assets/icons/icons_sprite.svg#icon-basket"></use>
          </StDeleteTopicIcon>
        </StDeleteTopicButton>
      </StTableCell>
      <StTableCell css={textAlignLeft}>
        <p>{name}</p>
      </StTableCell>
      <StTableCell>
        <p>{total_messages}</p>
      </StTableCell>
      <StTableCell>
        <p>{user.display_name}</p>
      </StTableCell>
      <StTableCell css={fontStyle}>
        <p>{last_message}</p>
      </StTableCell>
    </StTableTopic>
  );
};

export default ForumTopic;
