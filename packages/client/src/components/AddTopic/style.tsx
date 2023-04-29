import styled from 'styled-components';
import Form from 'components/Form/Form';
import { StFieldList } from 'components/Form/style';
import { StInputContainer, StInput, StLabel } from 'components/Input/style';

export const StTopicForm = styled(Form)`
  width: 100%;
  min-width: auto;
  padding: 0;
  box-shadow: none;
  border-radius: 0;
  background-color: inherit;

  & ${StFieldList} {
    gap: 40px;
  }

  & ${StInputContainer} {
    height: 111px;

    &:first-child {
      height: 50px;
    }
  }

  ${StInput} {
    padding: 17px 24px;

    &::placeholder {
      color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
      filter: opacity(50%);
      text-align: center;
    }
  }

  ${StLabel} {
    display: none;
  }
`;
