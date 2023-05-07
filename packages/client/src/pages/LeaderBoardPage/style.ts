import styled from 'styled-components';

import { BACKGROUND_COLOR_TABLE_PRIMARY } from 'styles/variables/colors-const';
import {
  DEPTH_CONTAINER,
  GRID_TABLE_CONTAINER,
  BORDER_WIDTH_TABLE,
  BORDER_RADIUS_SIZE,
  COLUMNS_WIDTH_HEAD_TABLE,
  COLUMNS_WIDTH_TABLE,
} from 'styles/variables/styleConstants';

import { customScrollbar } from 'styles/global';

export const StBoard = styled.div`
  width: 100%;
  border-radius: 50px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  box-shadow: ${DEPTH_CONTAINER};
  padding: 40px 64px;
  margin: 0 40px auto;
  overflow: overlay;
  min-height: 200px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StTitle = styled.h1`
  text-align: center;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  font-size: 32px;
  line-height: 38px;
  font-weight: 500;
`;

export const StTable = styled.div`
  display: grid;
  gap: ${BORDER_WIDTH_TABLE};

  background-color: ${BACKGROUND_COLOR_TABLE_PRIMARY};

  border: ${BORDER_WIDTH_TABLE} solid rgba(91, 91, 91, 0.5);
  border-radius: ${BORDER_RADIUS_SIZE};
  overflow: hidden;

  color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  text-align: center;
`;

export const StPlayer = styled.div`
  gap: 10px;
  padding: 5px 10px;
`;

export const StHead = styled.div`
  ${GRID_TABLE_CONTAINER};
  grid-template-columns: ${COLUMNS_WIDTH_HEAD_TABLE};
  grid-template-rows: 60px;
`;

export const StWinsColumnsHead = styled.div`
  ${GRID_TABLE_CONTAINER};
  grid-template-columns: 200px 200px;

  > * {
    &:first-child {
      grid-column: 1 / -1;
    }
  }
`;

export const StHeadChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props?.theme.BACKGROUND_COLOR_TABLE_PRIMARY};
  text-transform: uppercase;
  color: ${props => props?.theme.COLOR_TABLE_TEXT_PRIMARY};
  height: 100%;
`;

export const StBody = styled.div`
  ${GRID_TABLE_CONTAINER};
  ${customScrollbar}

  overflow-y: auto;
  max-height: 580px;
  grid-template-columns: ${COLUMNS_WIDTH_TABLE};
  grid-auto-rows: minmax(60px, auto);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props?.theme.BACKGROUND_COLOR_TABLE_SECONDARY};
    color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  }

  & > ${StPlayer} {
    text-align: left;
    justify-content: left;
  }
`;

export const StPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  line-height: 48px;
  min-height: 400px;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
`;
