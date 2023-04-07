import styled from 'styled-components';
import { StButton } from 'components/Button/style';
import * as COLORS from 'styles/variables/colors-const';

export const StStatusBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  z-index: 2;
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
  margin: 0;
  margin-right: 5px;
  svg {
    transition: all 0.3s ease-in-out;
  }
  &:hover svg {
    fill: ${COLORS.COLOR_ELEMENT_MAIN};
  }
  &: last-child {
    margin-right: 0;
  }
`;

export const StStatusBarTime = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: right;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 5px;
  color: ${COLORS.COLOR_ELEMENT_CONTRAST};
`;
