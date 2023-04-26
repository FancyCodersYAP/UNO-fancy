import { EntityTypes, HandEntityTypes } from 'game/types';
import {
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
  margin,
} from 'game/utils/constants';
import { getHandOrientation, HandOrientationTypes } from 'game/utils';

/* Расчёт ширины и высоты слоя */
export const calcCanvasMaxSizes = (
  entityName: EntityTypes | 'animation'
): Record<string, number> => {
  let width = 0,
    height = 0;

  const space = 0;

  switch (entityName) {
    case 'frontHand':
    case 'topHand':
      width = window.innerWidth - BASE_WIDTH_CARD * 2 - margin * 2;
      height = BASE_HEIGHT_CARD + 2 * space;
      break;
    case 'rightHand':
    case 'leftHand':
      width = BASE_WIDTH_CARD + 2 * space;
      /* Т.к. высота карт больше, чем ширина, вертикальным "рукам" даём больше места */
      height = window.innerHeight - 10 * 2;
      break;
    case 'table':
      width = BASE_WIDTH_CARD * 2 + margin;
      height = BASE_HEIGHT_CARD + 1;
      break;
    case 'animation':
      width = window.innerWidth;
      height = window.innerHeight;
      break;
  }

  return { width: width, height: height };
};

/* Расчёт координат канваса с картами относительно экрана / динамического слоя для анимации */
export const calcCanvasCoords = (
  entityName: EntityTypes,
  screenWidth: number,
  screenHeight: number,
  canvasWidth: number,
  canvasHeight: number
): Record<string, number> => {
  const margin = 10;

  let xCanvas = 0,
    yCanvas = 0;

  switch (entityName) {
    case 'frontHand':
      xCanvas = (screenWidth - canvasWidth) / 2;
      yCanvas = screenHeight - margin - canvasHeight;
      break;
    case 'topHand':
      xCanvas = (screenWidth - canvasWidth) / 2;
      yCanvas = margin;
      break;
    case 'rightHand':
      xCanvas = screenWidth - margin - canvasWidth;
      yCanvas = (screenHeight - canvasHeight) / 2;
      break;
    case 'leftHand':
      xCanvas = margin;
      yCanvas = (screenHeight - canvasHeight) / 2;
      break;
    case 'table':
      xCanvas = (screenWidth - canvasWidth) / 2;
      yCanvas = (screenHeight - canvasHeight) / 2;
      break;
  }

  return { xCanvas: xCanvas, yCanvas: yCanvas };
};

/* Определение размера видимой части карты в зависимости от количества карт в руке */
export const calcVisiblePartOfCard = (
  cardsNum: number,
  entityName: HandEntityTypes
): number => {
  const handType = getHandOrientation(entityName);
  let size = 0;

  if (handType === 'horizontal') {
    size = BASE_WIDTH_CARD;
  } else {
    size = BASE_HEIGHT_CARD;
  }

  if (cardsNum === 1) {
    return size;
  }

  const threeFourths = (size / 4) * 3;
  const half = size / 2;
  const third = size / 3;
  const quarter = size / 4;

  switch (true) {
    case cardsNum < 5:
      return handType === 'horizontal' ? threeFourths : half;
    case cardsNum < 10:
      return handType === 'horizontal' ? half : third;
    default:
      return handType === 'horizontal' ? third : quarter;
  }
};

/* Расчёт ширины / высоты "руки" в зависимости от кол-ва карт и показываемой части карт */
export const calcHandSize = (
  totalCards: number,
  visiblePart: number,
  entityName: HandEntityTypes
): number => {
  const handType = getHandOrientation(entityName);
  let cardSize = 0;

  if (handType === 'horizontal') {
    cardSize = BASE_WIDTH_CARD;
  } else {
    cardSize = BASE_HEIGHT_CARD;
  }

  let remainsOfLastCard = 0;

  switch (visiblePart) {
    /* Когда показываем 3/4 карты */
    case (cardSize / 4) * 3:
      remainsOfLastCard = cardSize / 4;
      break;
    /* Когда показываем половину карты */
    case cardSize / 2:
      remainsOfLastCard = cardSize / 2;
      break;
    /* Когда показываем 1/3 карты */
    case cardSize / 3:
      remainsOfLastCard = (cardSize / 3) * 2;
      break;
    /* Когда показываем 1/4 карты */
    case cardSize / 4:
      remainsOfLastCard = (cardSize / 4) * 3;
      break;
  }

  return totalCards * visiblePart + remainsOfLastCard;
};

export const calcStartCoords = (
  totalCards: number,
  visiblePart: number,
  entityName: HandEntityTypes,
  layerMaxSize: number
): Record<string, number> => {
  const centerOfLayer = layerMaxSize / 2;
  const handSize = calcHandSize(totalCards, visiblePart, entityName);
  const startCoord =
    centerOfLayer - handSize / 2 > 0 ? centerOfLayer - handSize / 2 : 0;

  switch (getHandOrientation(entityName)) {
    case HandOrientationTypes.HORIZONTAL:
      return { x: startCoord, y: 0 };
    case HandOrientationTypes.VERTICAL:
      return { x: 0, y: startCoord };
    default:
      return { x: 0, y: 0 };
  }
};
