import styled, { css } from 'styled-components';
import { StButton } from 'components/Button/style';
import * as COLORS from 'styles/variables/colors-const';
import { COLOR_ELEMENT_ALTERNATE } from 'styles/variables/colors-theme-light';

export const StStatusBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  z-index: 120;
`;

export const StStatusBarButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StButtonStatusBar = styled(StButton)`
  background-color: initial;
  border: none;
  box-shadow: none;
  border-radius: 0;
  fill: ${COLORS.COLOR_ELEMENT_CONTRAST};
  padding: 0;
  margin: 0 5px 0 0;
  svg {
    transition: all 0.3s ease-in-out;
  }
  &:hover svg {
    fill: ${COLOR_ELEMENT_ALTERNATE};
  }
  &: last-child {
    margin-right: 0;
  }
`;

export const ButtonStatusBarActive = css`
  fill: ${COLOR_ELEMENT_ALTERNATE};
`;
