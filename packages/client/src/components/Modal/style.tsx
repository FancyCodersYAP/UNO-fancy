import styled, { css } from 'styled-components';
import * as COLORS from 'styles/variables/colors-const';
import { ModalProps } from 'styles/variables/types';
import { DEPTH_CONTAINER } from 'styles/variables/styleConstants';

export const StModal = styled.section`
  background-color: ${COLORS.BACKGROUND_ELEMENT_OPACITY};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
`;

export const StModalWrapper = styled.div<ModalProps>`
  background-color: ${props => props.theme.COLOR_PREVIEW_PRIMARY};
  border-radius: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 55px 65px;
  width: 766px;
  box-shadow: ${DEPTH_CONTAINER};
`;

export const StModalTitle = styled.h3`
  color: ${props => props.theme.COLOR_TEXT_PRIMARY};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 50px;
`;

export const StModalCloseIcon = styled.svg`
  width: 36px;
  height: 36px;
`;

export const exitMenuModalStyles = css`
  width: 430px;
  padding: 46px 50px;
`;
