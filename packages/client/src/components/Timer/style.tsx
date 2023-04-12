import styled from 'styled-components';
import { COLOR_ELEMENT_CONTRAST } from 'styles/variables/colors-const';

export const StTimer = styled.div`
  width: 85px;
`;

export const StTimerContainer = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: right;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 5px;
  color: ${COLOR_ELEMENT_CONTRAST};
`;
