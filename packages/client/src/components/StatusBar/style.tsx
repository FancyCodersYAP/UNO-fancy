import styled from 'styled-components';
import { StButton } from 'components/Button/style';
import * as COLORS from 'styles/variables/colors-const';

export const StStatusBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`;

export const StStatusBarButtons = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
`;

export const StButtonStatusBar = styled(StButton)`
  background-color: initial;
  border: none;
  box-shadow: none;
  border-radius: 0;
  fill: ${COLORS.COLOR_ELEMENT_CONTRAST};
  padding: 0;
  svg {
    transition: all 0.3s ease-in-out;
  }
  &:hover svg {
    fill: ${COLORS.COLOR_ELEMENT_MAIN};
  }
`;

export const StyledButtonStatusBar = styled(StButtonStatusBar)`
  margin-right: '10px';
`

export const StStatusBarTime = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: right;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 5px;
  color: ${COLORS.COLOR_ELEMENT_CONTRAST};
`;
