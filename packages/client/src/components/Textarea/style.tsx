import styled from 'styled-components';
import { customScrollbar } from 'styles/global';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';

export const StTextareaContainer = styled.div`
  height: 111px;
  position: relative;
  width: 100%;
`;

export const StTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 25px;
  border-radius: ${BORDER_RADIUS_SIZE};
  color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
  border: none;
  background-color: ${props => props.theme?.COLOR_BACKGROUND_SECONDARY};
  padding: 17px 24px;
  position: relative;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    position: absolute;
    color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
    filter: opacity(50%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${customScrollbar}
  border-radius: ${BORDER_RADIUS_SIZE};
  resize: none;
  height: 111px;
`;
