export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;

export const BASE_WIDTH_CARD = 100;
export const BASE_HEIGHT_CARD = 150;
export const CARD_BORDER = BASE_HEIGHT_CARD / 29.5;
export const CARD_BORDER_RADIUS = 6;

export const START_NUM_CARDS_IN_HAND = 7;

export const xCanvasCenter = CANVAS_WIDTH / 2;
export const yCanvasCenter = CANVAS_HEIGHT / 2;

export const stepBetweenCards = 10;
export const margin = 20;

export const MIN_X_FOR_HORIZONTAL_HANDS = BASE_WIDTH_CARD + margin;
export const MIN_Y_FOR_VERTICAL_HANDS = margin;

export const MAX_WIDTH_HORIZONTAL_HANDS =
  CANVAS_WIDTH - MIN_X_FOR_HORIZONTAL_HANDS - (BASE_WIDTH_CARD + margin);
export const MAX_HEIGHT_HORIZONTAL_HANDS = BASE_HEIGHT_CARD;
export const MAX_WIDTH_VERTICAL_HANDS = BASE_WIDTH_CARD;
export const MAX_HEIGHT_VERTICAL_HANDS = CANVAS_HEIGHT - margin * 2;

export const FONTFAMILY_MAIN = 'serif';
export const FONT_COLOR_MAIN = '#FFF';
export const FONT_COLOR_BLACK = '#1F1D1E';
export const BG_COLOR_MAIN = '#FFF';
export const BG_COLOR_ELLIPSE = '#EA4000';
export const BG_COLOR_FLAG = BG_COLOR_ELLIPSE;

export const NAME_DATA = {
  SIZE: 16,
  FONTFAMILY: FONTFAMILY_MAIN,
  COLOR: FONT_COLOR_MAIN,
};

export const FLAG_DATA = {
  RADIUS: 6,
  BACKGROUND: BG_COLOR_FLAG,
  BORDER_WIDTH: 1,
  BORDER_COLOR: BG_COLOR_MAIN,
};

export const DISTANCE_BETWEEN_FLAG_AND_NAME = 5;
export const DISTANCE_BETWEEN_NAME_AND_HAND = 5;

export const BUBBLE_DATA = {
  WIDTH: 80,
  HEIGHT: 20,
  BACKGROUND: BG_COLOR_MAIN,
  TEXT_COLOR: FONT_COLOR_BLACK,
  TEXT_SIZE: 16,
  TEXT_FONTFAMILY: FONTFAMILY_MAIN,
};

export const closedPackCoords = [
  xCanvasCenter - stepBetweenCards / 2 - BASE_WIDTH_CARD,
  yCanvasCenter - BASE_HEIGHT_CARD / 2,
];
export const openPackCoords = [
  xCanvasCenter + stepBetweenCards / 2,
  yCanvasCenter - BASE_HEIGHT_CARD / 2,
];

export const tableCardsCoords = [
  closedPackCoords[0],
  closedPackCoords[1],
  openPackCoords[0] + BASE_WIDTH_CARD - closedPackCoords[0],
  openPackCoords[1] + BASE_HEIGHT_CARD - closedPackCoords[1],
];
