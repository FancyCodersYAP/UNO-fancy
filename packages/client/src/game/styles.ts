import { BASE_HEIGHT_CARD } from './utils/constants';

export const GAME_STYLES = {
  FONT_FAMILY_MAIN: 'Helvetica',
  FONT_COLOR_MAIN: '#FFF',
  BG_COLOR_BLACK: '#1F1D1E',
  BG_COLOR_MAIN: '#FFF',
  BG_COLOR_ELLIPSE: '#EA4000',
};

export const LAYER_STYLES = {
  POSITION: 'absolute',
  FLEX_DIRECTION: 'column',
  JUSTIFY_CONTENT: 'center',
  DISPLAY: 'flex',
  ALIGN_ITEMS: 'center',
  MARGIN: '10px',
};

export const NAME_STYLES = {
  SIZE: `${Math.floor(BASE_HEIGHT_CARD / 8)}px`,
  FONT_FAMILY: GAME_STYLES.FONT_FAMILY_MAIN,
  COLOR: '#ffffff80',
  FONT_WEIGHT: '600',
};

export const BUTTON_AND_BOX_STYLES = {
  HEIGHT: '50px',
  WIDTH: '70px',
  POSITION: 'absolute',
  BORDER_RADIUS: '5px',
  Z_INDEX: '31',
};

export const UNO_BUTTON_STYLES = {
  MARGIN: 'auto',
  RIGHT: '-80px',
  BACKGROUND_COLOR: '#3a5d70',
  TEXT_ALIGN: 'center',
  COLOR: 'white',
  BORDER: '0',
};
