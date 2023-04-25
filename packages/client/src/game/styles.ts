import { BASE_HEIGHT_CARD } from './utils/constants';

export const GAME_STYLES = {
  FONT_FAMILY_MAIN: 'Helvetica',
  FONT_COLOR_MAIN: '#FFF',
  FONT_COLOR_DARK: 'rgba(31, 29, 30, 1.0)',
  BG_COLOR_BLACK: '#1F1D1E',
  BG_COLOR_MAIN: '#FFF',
  BG_COLOR_ELLIPSE: '#EA4000',
  BG_COLOR_DARK_BLUE: 'rgba(58, 93, 112, 0.8)',
};

export const CARD_STYLES = {
  BORDER_WIDTH_BLACK: 1,
  BORDER_WIDTH_WHITE: Math.floor(BASE_HEIGHT_CARD / 29.5),
  SIGN_BORDER_WIDTH: 0.64,
  BORDER_RADIUS: 15,
  SHADOW_BLUR: 4,
};

export const CARD_BORDER =
  CARD_STYLES.BORDER_WIDTH_BLACK + CARD_STYLES.BORDER_WIDTH_WHITE;

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
  BORDER_RADIUS: '1em',
  Z_INDEX: '31',
  BORDER: '4px solid white',
  BOX_SHADOW: '0px 0px 5px rgba(58, 93, 112, 0.7)',
};

export const UNO_BUTTON_STYLES = {
  MARGIN: 'auto',
  RIGHT: '-90px',
  BACKGROUND_COLOR: '#3a5d70',
  TEXT_ALIGN: 'center',
  COLOR: 'white',
};
