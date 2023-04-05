import { BASE_HEIGHT_CARD } from './utils/constants';

export const GAME_STYLES = {
  FONTFAMILY_MAIN: 'Helvetica',
  FONT_COLOR_MAIN: '#FFF',
  BG_COLOR_BLACK: '#1F1D1E',
  BG_COLOR_MAIN: '#FFF',
  BG_COLOR_ELLIPSE: '#EA4000',
};

export const LAYER_STYLES = {
  POSITION: 'absolute',
  FLEXDIRECTION: 'column',
  JUSTIFYCONTENT: 'center',
  DISPLAY: 'flex',
  ALIGNITEMS: 'center',
  MARGIN: '10px',
};

export const NAME_STYLES = {
  SIZE: `${Math.floor(BASE_HEIGHT_CARD / 8)}px`,
  FONTFAMILY: GAME_STYLES.FONTFAMILY_MAIN,
  COLOR: GAME_STYLES.FONT_COLOR_MAIN,
  FONTWEIGHT: '600',
};

export const BUTTON_AND_BOX_STYLES = {
  HEIGHT: '50px',
  WIDTH: '70px',
  POSITION: 'absolute',
  BORDERRADIUS: '5px',
  ZINDEX: '10',
};

export const UNO_BUTTON_STYLES = {
  MARGIN: 'auto',
  RIGHT: '-80px',
  BACKGROUNDCOLOR: '#3a5d70',
  TEXTALIGN: 'center',
  COLOR: 'white',
  BORDER: '0',
};
