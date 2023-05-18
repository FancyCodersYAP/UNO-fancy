import styled from 'styled-components';
import { StTopicForm } from 'components/AddTopic/style';
import { StTextarea, StTextareaContainer } from 'components/Textarea/style';
import { StEmojiWrapper } from 'components/EmojisButton/style';
import { StFlex } from 'styles/global';
import Button from 'components/Button/Button';

export const StMessageForm = styled(StTopicForm)`
  ${StTextareaContainer} {
    height: 168px;
  }

  ${StTextarea} {
    height: 168px;
    padding-top: 30px;
  }

  ${StEmojiWrapper} {
    display: block;
  }
`;

export const StAnswerWrapper = styled.div`
  position: absolute;
  z-index: 100;
  margin: 7px 0 0 13px;
  padding: 2px 5px;
  background-color: ${props => props.theme?.COLOR_BACKGROUND_SECONDARY};
`;

export const StAnswerAll = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
  filter: opacity(50%);
  display: block;
`;

export const StAnswer = styled(StAnswerAll)`
  font-size: 13px;
  color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  border-left: 5px solid ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  filter: opacity(100%);
  text-decoration-line: none;
  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StFlexButtonsWrapperStyle = styled(StFlex)`
  margin-top: 32px;
`;

export const StButtonAddAnswer = styled(Button)`
  width: 200px;
  margin: 0;
`;
