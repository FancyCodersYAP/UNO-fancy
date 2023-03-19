export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;

export const BASE_WIDTH_CARD = 100;
export const BASE_HEIGHT_CARD = 150;

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

const MAIN_FONTFAMILY = 'serif';

export const NAME_DATA = {
  SIZE: 16,
  FONTFAMILY: MAIN_FONTFAMILY,
  COLOR: 'white',
};

export const FLAG_DATA = {
  RADIUS: 6,
  BACKGROUND: 'red',
  BORDER_WIDTH: 1,
  BORDER_COLOR: 'white',
};

export const DISTANCE_BETWEEN_FLAG_AND_NAME = 5;
export const DISTANCE_BETWEEN_NAME_AND_HAND = 5;

export const BUBBLE_DATA = {
  WIDTH: 80,
  HEIGHT: 20,
  BACKGROUND: 'white',
  TEXT_COLOR: 'black',
  TEXT_SIZE: 16,
  TEXT_FONTFAMILY: MAIN_FONTFAMILY,
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
