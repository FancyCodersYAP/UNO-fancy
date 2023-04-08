import styled from 'styled-components';

export const StTimer = styled.div`
  width: 85px;
`;

export const StTimerContainer = styled.p`
  background-color: ${props => props.theme.COLOR_PREVIEW_PRIMARY};
  padding: 10px;
  color: ${props => props.theme.COLOR_TEXT_PRIMARY};
  text-align: end;
`;
