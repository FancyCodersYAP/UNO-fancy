import styled, { css } from 'styled-components';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';
import { customScrollbar } from 'styles/global';

export const StTopicLabel = styled.label`
  visibility: hidden;
  display: none;
`;

const inputStyle = css`
  width: 100%;
  border-radius: ${BORDER_RADIUS_SIZE};
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
  border: none;
  background-color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  padding: 17px 24px 13px;
  margin-bottom: 32px;

  &::placeholder {
    color: ${props => props.theme?.COLOR_TEXT_ACTIVE};
    filter: opacity(50%);
  }
`;

export const StTopicInput = styled.input`
  ${inputStyle}
`;

export const StTopicTextarea = styled.textarea`
  ${inputStyle}
  ${customScrollbar}
  border-radius: ${BORDER_RADIUS_SIZE} 10px 10px ${BORDER_RADIUS_SIZE};
  resize: none;
  height: 111px;
`;
