import styled from 'styled-components';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';

export const StGameSettingsButtonImgs = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  padding: 22px;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: ${BORDER_RADIUS_SIZE};
  background-color: ${props => props?.theme.COLOR_ELEMENT_PRIMARY};
`;

export const StGameSettingsButtonImg = styled.img`
  width: 75px;
  height: 75px;

  &:nth-child(2) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
