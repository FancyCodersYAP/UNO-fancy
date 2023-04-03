import styled from 'styled-components';

import { BACKGROUND_COLOR_TABLE_PRIMARY } from 'styles/variables/colors-const';
import {
  BORDER_RADIUS_SIZE,
} from 'styles/variables/styleConstants';

export const StTable = styled.div`
  display: grid;
  gap: 2px;

  background-color: ${BACKGROUND_COLOR_TABLE_PRIMARY};

  border: 2px solid rgba(91, 91, 91, 0.5);
  border-radius: ${BORDER_RADIUS_SIZE};
  overflow: hidden;

  color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  text-align: center;
`;

export const StHead = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr 163px 160px 305px;
  grid-template-rows: 60px;

  & > div {
    background-color: ${props => props?.theme.BACKGROUND_COLOR_TABLE_PRIMARY};
    color: ${props => props?.theme.COLOR_TABLE_TEXT_PRIMARY};
    height: 100%;
    padding: 20px 6px;
  }
`;

export const StBody = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr 163px 160px 305px;
  gap: 2px;
  grid-auto-rows: minmax(60px, auto);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props?.theme.BACKGROUND_COLOR_TABLE_SECONDARY};
    color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  }
`;
