import styled, { css } from 'styled-components';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';

export const StAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
`;

export const avatarStyles = css`
  border: 1px solid #fffefe;

  &:hover::before {
    display: none;
  }
`;

export const StAvatarInputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
`;

export const StAvatarInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const StAvatarLabel = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  color: ${props => props.theme?.COLOR_ELEMENT_SECONDARY};
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  border: 2px solid #acb5bd;
  box-shadow: inset 4px 4px 4px rgba(130, 128, 128, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: ${BORDER_RADIUS_SIZE};
  padding: 10px 80px;
  cursor: pointer;
`;
