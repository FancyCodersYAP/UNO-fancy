import styled from 'styled-components';
import { StTopicForm } from 'components/AddTopic/style';
import { StTextarea } from 'components/Textarea/style';

export const StMessageForm = styled(StTopicForm)`
  ${StTextarea} {
    height: 168px;
    padding-top: 30px;
  }
`;

export const StAnswerAll = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
  filter: opacity(50%);
  margin-bottom: 10px;
  display: block;
  position: absolute;
  z-index: 100;
  margin: 9px 0 0 13px;
`;

export const StAnswer = styled(StAnswerAll)`
  font-size: 13px;
  color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  border-left: 5px solid ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  padding: 0 5px;
  filter: opacity(100%);
  text-decoration-line: none;
  background-color: rgba(0, 0, 0, 0.1);
`;
