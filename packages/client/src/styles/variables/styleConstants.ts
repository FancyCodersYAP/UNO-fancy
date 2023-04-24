import { css } from 'styled-components';

import { BORDER_COLOR_BUTTON } from './colors-const';

export const DEPTH_CONTAINER = '10px 10px 10px rgba(0, 0, 0, 0.25)';

export const BORDER_RADIUS_SIZE = '20px';

export const BORDER_WIDTH_TABLE = '2px';

export const COLUMNS_WIDTH_TABLE = '50px 1fr 200px 200px 200px';

export const COLUMNS_WIDTH_HEAD_TABLE = '50px 1fr 200px 402px';

export const GRID_TABLE_CONTAINER = css`
  display: grid;
  gap: ${BORDER_WIDTH_TABLE};
`;

export const BORDER_BUTTON = `2px solid ${BORDER_COLOR_BUTTON}`;

export const BOX_SHADOW_BUTTON =
  '0 4px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(130, 128, 128, 0.25)';
