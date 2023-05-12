import styled from 'styled-components';
import { StTextContainerWithShadow } from 'styles/global';
import { MedalProps } from './types';

export const StEndGameTextWrapper = styled.div`
  margin-left: 66px;
`;

export const StEndGameText = styled(StTextContainerWithShadow)`
  margin-bottom: 25px;
`;

export const StMedalIcon = styled.svg<MedalProps>`
  width: 152px;
  height: 216px;
  filter: ${({ isWin }) =>
    isWin
      ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
      : 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) grayscale(50%) opacity(80%)'};
`;
