import styled from 'styled-components';
import { DEPTH_CONTAINER } from 'styles/variables/styleConstants';

export const StErrorFallbackContainer = styled.div`
  position: relative;
  width: auto;
  min-width: 350px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  padding: 40px 60px;
  box-shadow: ${DEPTH_CONTAINER};
  border-radius: 50px;
  max-width: 920px;
`;

export const StErrorMessage = styled.pre`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 20px;
  text-align: center;
  white-space: pre-wrap;
`;
