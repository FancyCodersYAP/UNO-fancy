import styled, { css } from 'styled-components';
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

export const StButtonStatusBar = styled.button`
  margin: 0 5px 0 0;

  &: last-child {
    margin-right: 0;
  }

  &:hover p {
    color: ${COLOR_ELEMENT_ALTERNATE};
  }

  &:hover svg {
    fill: ${COLOR_ELEMENT_ALTERNATE};
  }
`;

export const StStatusBarIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${COLORS.COLOR_ELEMENT_CONTRAST};
`;

export const StStatusBarIconActive = css`
  fill: ${COLOR_ELEMENT_ALTERNATE};
`;
