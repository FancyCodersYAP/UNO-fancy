import styled from 'styled-components';
import * as COLORS from '../../styles/variables/colors-const';

export const StModal = styled.section`
  background-color: ${COLORS.BACKGROUND_ELEMENT_OPACITY};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

export const StModalWrapper = styled.div`
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`;

export const StModalTitle = styled.h3`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 50px;
`;
