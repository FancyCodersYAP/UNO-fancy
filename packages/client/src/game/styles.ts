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
  SHADOW_BLUR: 3,
};

export const CARD_BORDER =
  CARD_STYLES.BORDER_WIDTH_BLACK + CARD_STYLES.BORDER_WIDTH_WHITE;

export const NAME_STYLES = {
  SIZE: `${Math.floor(BASE_HEIGHT_CARD / 8)}px`,
};

export const buttonWidth = Math.floor(BASE_HEIGHT_CARD / 3);
export const buttonHeight = Math.floor(BASE_HEIGHT_CARD / 4);

export const UNO_BUTTON_STYLES = {
  HEIGHT: `${buttonHeight}px`,
  WIDTH: `${buttonWidth}px`,
  RIGHT: `-${buttonWidth + buttonWidth / 2}px`,
  FONT_SIZE: `${Math.floor(BASE_HEIGHT_CARD / 10)}px`,
};

export const COLOR_BOX_STYLES = {
  HEIGHT: UNO_BUTTON_STYLES.HEIGHT,
  WIDTH: UNO_BUTTON_STYLES.HEIGHT,
  LEFT: `-${buttonWidth + buttonWidth / 2 - (buttonWidth - buttonHeight)}px`,
};

export const BUBBLE_STYLES = {
  HEIGHT: `${buttonHeight - 10}px`,
  WIDTH: `${buttonWidth - 10}px`,
  FONT_SIZE: `${Math.floor(BASE_HEIGHT_CARD / 10)}px`,
  LINE_HEIGHT: `${buttonHeight - 10}px`,
  MARGIN: `-${Math.floor(BASE_HEIGHT_CARD / 8) + 35}px`,
};
