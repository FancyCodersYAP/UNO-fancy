import { StButtonStatusBar, StStatusBarIcon } from 'components/StatusBar/style';
import styled from 'styled-components';
import { StFlex } from 'styles/global';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledButtonStatusBar = styled(StButtonStatusBar)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledStatusBarIcon = styled(StStatusBarIcon)`
  width: 300px;
  height: 260px;
`;

export const StPlayModalParagragh = styled.p`
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: white;
`;
