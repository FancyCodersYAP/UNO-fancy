import styled from 'styled-components';
import { StTopicForm } from 'components/AddTopic/style';
import { StTextarea } from 'components/Textarea/style';

export const StMessageForm = styled(StTopicForm)`
  ${StTextarea} {
    height: 168px;
  }
`;
