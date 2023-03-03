export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;

export const BASE_WIDTH_CARD = 100;
export const BASE_HEIGHT_CARD = 150;

export const NUM_CARDS_IN_HAND = 7;

export const xCenter = CANVAS_WIDTH / 2;
export const yCenter = CANVAS_HEIGHT / 2;

export const stepBetweenCards = 10;
export const margin = 20;

export const closedPackCoords = [
  xCenter - stepBetweenCards / 2 - BASE_WIDTH_CARD,
  yCenter - BASE_HEIGHT_CARD / 2,
];
export const openPackCoords = [
  xCenter + stepBetweenCards / 2,
  yCenter - BASE_HEIGHT_CARD / 2,
];

// export const xHorizontalArray = [
//   xCenter - BASE_WIDTH_CARD / 2,
//   xCenter - BASE_WIDTH_CARD / 2 - (BASE_WIDTH_CARD + stepBetweenCards) * 1,
//   xCenter + BASE_WIDTH_CARD / 2 + stepBetweenCards,
//   xCenter - BASE_WIDTH_CARD / 2 - (BASE_WIDTH_CARD + stepBetweenCards) * 2,
//   xCenter + BASE_WIDTH_CARD / 2 + stepBetweenCards * 2 + BASE_WIDTH_CARD,
//   xCenter - BASE_WIDTH_CARD / 2 - (BASE_WIDTH_CARD + stepBetweenCards) * 3,
//   xCenter + BASE_WIDTH_CARD / 2 + stepBetweenCards * 3 + BASE_WIDTH_CARD * 2
// ];

export const xHorizontalArray = [
  xCenter - BASE_WIDTH_CARD * 2,
  xCenter - BASE_WIDTH_CARD - BASE_WIDTH_CARD / 2,
  xCenter - BASE_WIDTH_CARD,
  xCenter - BASE_WIDTH_CARD / 2,
  xCenter,
  xCenter + BASE_WIDTH_CARD / 2,
  xCenter + BASE_WIDTH_CARD,
];

export const xLeftArray = [
  margin,
  margin,
  margin,
  margin,
  margin,
  margin,
  margin,
];

export const xRightArray = [
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
  CANVAS_WIDTH - BASE_WIDTH_CARD - margin,
];

export const yBottomArray = [
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
  CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin,
];

export const yTopArray = [
  margin,
  margin,
  margin,
  margin,
  margin,
  margin,
  margin,
];

export const yVerticalArray = [
  yCenter - (BASE_HEIGHT_CARD / 2) * 4 + margin * 8,
  yCenter - (BASE_HEIGHT_CARD / 2) * 3 + margin * 6,
  yCenter - (BASE_HEIGHT_CARD / 2) * 2 + margin * 4,
  yCenter - BASE_HEIGHT_CARD / 2 + margin * 2,
  yCenter,
  yCenter + BASE_HEIGHT_CARD / 2 - margin * 2,
  yCenter + (BASE_HEIGHT_CARD / 2) * 2 - margin * 4,
  yCenter + (BASE_HEIGHT_CARD / 2) * 3 - margin * 6,
];

export const tableCardsCoords = [
  closedPackCoords[0],
  closedPackCoords[1],
  openPackCoords[0] + BASE_WIDTH_CARD - closedPackCoords[0],
  openPackCoords[1] + BASE_HEIGHT_CARD - closedPackCoords[1],
];

export const fronCardsCoords = [
  xHorizontalArray[0],
  yBottomArray[0],
  xHorizontalArray[xHorizontalArray.length - 1] +
    BASE_WIDTH_CARD -
    xHorizontalArray[0],
  yBottomArray[0] + BASE_HEIGHT_CARD - yBottomArray[0],
];

export const topCardsCoors = [
  xHorizontalArray[0],
  yTopArray[0],
  xHorizontalArray[xHorizontalArray.length - 1] +
    BASE_WIDTH_CARD -
    xHorizontalArray[0],
  yTopArray[0] + BASE_HEIGHT_CARD - yTopArray[0],
];

export const leftCardsCoors = [
  xLeftArray[0],
  yVerticalArray[0],
  xLeftArray[0] + BASE_WIDTH_CARD - xLeftArray[0],
  yVerticalArray[yVerticalArray.length - 1] +
    BASE_HEIGHT_CARD -
    yVerticalArray[0],
];

export const rightCardsCoors = [
  xRightArray[0],
  yVerticalArray[0],
  xRightArray[0] + BASE_WIDTH_CARD - xRightArray[0],
  yVerticalArray[yVerticalArray.length - 1] +
    BASE_HEIGHT_CARD -
    yVerticalArray[0],
];
