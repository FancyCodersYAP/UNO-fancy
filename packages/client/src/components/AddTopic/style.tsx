import styled from 'styled-components';
import Form from 'components/Form/Form';
import { StFieldList } from 'components/Form/style';
import { StInputContainer, StInput, StLabel } from 'components/Input/style';
import { StEmojiWrapper } from 'components/EmojisButton/style';
import { FormError } from '../Form/style';
import { StFlex } from 'styles/global';
import Button from 'components/Button/Button';

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
    height: 50px;
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

  ${StEmojiWrapper} {
    display: none;
  }

  && ${FormError} {
    bottom: -10%;
  }
`;

export const StFlexButtonsWrapperStyle = styled(StFlex)`
  margin-top: 32px;
`;

export const StButtonAddTopic = styled(Button)`
  width: 200px;
  margin: 0;
`;
