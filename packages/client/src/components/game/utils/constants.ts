export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;

export const BASE_WIDTH_CARD = 100;
export const BASE_HEIGHT_CARD = 150;

export const xCenter = CANVAS_WIDTH / 2;
export const yCenter = CANVAS_HEIGHT / 2;

export const stepBetweenCards = 10;
export const margin = 10;

export const xArray = [
  xCenter - BASE_WIDTH_CARD / 2,
  xCenter - BASE_WIDTH_CARD / 2 - (BASE_WIDTH_CARD + stepBetweenCards) * 1,
  xCenter + BASE_WIDTH_CARD / 2 + stepBetweenCards,
  xCenter - BASE_WIDTH_CARD / 2 - (BASE_WIDTH_CARD + stepBetweenCards) * 2,
  xCenter + BASE_WIDTH_CARD / 2 + stepBetweenCards * 2 + BASE_WIDTH_CARD,
  xCenter - BASE_WIDTH_CARD / 2 - (BASE_WIDTH_CARD + stepBetweenCards) * 3,
  xCenter + BASE_WIDTH_CARD / 2 + stepBetweenCards * 3 + BASE_WIDTH_CARD * 2
]

export const closedPackCoords = [xCenter - stepBetweenCards / 2 - BASE_WIDTH_CARD, yCenter - BASE_HEIGHT_CARD / 2];
export const openPackCoords = [xCenter + stepBetweenCards / 2, yCenter - BASE_HEIGHT_CARD / 2];