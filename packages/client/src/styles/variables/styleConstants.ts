import { css } from 'styled-components';

export const DEPTH_CONTAINER = '10px 10px 10px rgba(0, 0, 0, 0.25)';

export const BORDER_RADIUS_SIZE = '20px';

export const BORDER_WIDTH_TABLE = '2px';

export const COLUMNS_WIDTH_TABLE = '50px 1fr 200px 200px';

export const GRID_TABLE_CONTAINER = css`
  display: grid;
  grid-template-columns: ${COLUMNS_WIDTH_TABLE};
  gap: ${BORDER_WIDTH_TABLE};
`;
