import {
  BASE_WIDTH_CARD,
  margin,
  ANIMATION_TIME,
  MOVEMENT_ANIMATION_TIME,
  FLIPPING_ANIMATION_TIME,
} from './constants';
import {
  CardType,
  CardMovementDirection,
  AnimatedCardType,
  EntityTypes,
} from '../types';
import {
  createAnimationCanvas,
  removeLayer,
  drawCardBack,
  drawCardFront,
  calcCanvasMaxSizes,
  calcCanvasCoords,
} from '.';

/* Анимация перемещения карты */
const animateCardMovement = (
  context: CanvasRenderingContext2D,
  startCoords: number[],
  finishCoords: number[],
  card: CardType,
  direction: CardMovementDirection
): void => {
  const startTime = performance.now();
  const animationTime = MOVEMENT_ANIMATION_TIME;

  const xLength = startCoords[0] - finishCoords[0];
  const yLength = startCoords[1] - finishCoords[1];

  requestAnimationFrame(animate);

  function animate() {
    const time = performance.now();
    const shiftTime = time - startTime;
    const multiply = Math.min(shiftTime / animationTime, 1);

    if (multiply < 1) {
      requestAnimationFrame(animate);
    }

    const newX = startCoords[0] - xLength * multiply;
    const newY = startCoords[1] - yLength * multiply;

    context.clearRect(0, 0, 5000, 5000);
    if (direction === 'fromUser') {
      drawCardFront(context, newX, newY, card.color, card.sign);
    } else {
      drawCardBack(context, newX, newY);
    }
  }

  if (direction === 'fromUser' || direction === 'toBot') return;

  setTimeout(() => {
    animateCardFlipping(
      context,
      card,
      finishCoords[0],
      finishCoords[1],
      'close'
    );
  }, animationTime);
  setTimeout(() => {
    animateCardFlipping(
      context,
      card,
      finishCoords[0],
      finishCoords[1],
      'open'
    );
  }, animationTime + FLIPPING_ANIMATION_TIME);
};

/* Анимация переворачинвания карты */
export const animateCardFlipping = (
  context: CanvasRenderingContext2D,
  card: CardType,
  x: number,
  y: number,
  cardView: AnimatedCardType
) => {
  const xLength = BASE_WIDTH_CARD / 2;

  const startTime = performance.now();
  const animationTime = FLIPPING_ANIMATION_TIME;
  const startScale = cardView === 'close' ? 1 : 0;

  requestAnimationFrame(animate);

  function animate() {
    const time = performance.now();
    const shiftTime = time - startTime;
    const multiply = shiftTime / animationTime;

    if (multiply < 1) {
      requestAnimationFrame(animate);
    }

    const scale =
      cardView === 'close' ? startScale - multiply : startScale + multiply;
    const newX =
      cardView === 'close'
        ? x + xLength * multiply
        : x + xLength - xLength * multiply;

    context.clearRect(0, 0, 5000, 5000);
    // context.transform(scale, 0, 0, 1, newX, y);
    if (cardView === 'close') {
      context.transform(scale, 0, 0, 1, newX, y);
      drawCardBack(context, 0, 0);
    } else {
      context.transform(scale, 0, 0, 1, newX, y);
      drawCardFront(context, 0, 0, card.color, card.sign);
    }
    context.resetTransform();
  }
};

export const moveCard = (
  card: CardType,
  handEntityName: EntityTypes,
  direction: CardMovementDirection,
  layerWidth: number,
  layerHeight: number,
  playSound: () => void
): void => {
  const { width: animtaionCanvasWidth, height: animtaionCanvasHeight } =
    calcCanvasMaxSizes('animation');
  const { width: tableWidth, height: tableHeight } =
    calcCanvasMaxSizes('table');

  const { xCanvas: handCanvasX, yCanvas: handCanvasY } = calcCanvasCoords(
    handEntityName,
    animtaionCanvasWidth,
    animtaionCanvasHeight,
    layerWidth,
    layerHeight
  );
  const { xCanvas: tableCanvasX, yCanvas: tableCanvasY } = calcCanvasCoords(
    'table',
    animtaionCanvasWidth,
    animtaionCanvasHeight,
    tableWidth,
    tableHeight
  );

  const animtaionLayer = createAnimationCanvas(
    animtaionCanvasWidth,
    animtaionCanvasHeight,
    30
  );
  const context = animtaionLayer.getContext('2d') as CanvasRenderingContext2D;

  if (card.x !== undefined && card.y !== undefined) {
    const movementStartCoords =
      direction === 'fromUser' || direction === 'fromBot'
        ? [handCanvasX + card.x, handCanvasY + card.y]
        : [tableCanvasX, tableCanvasY];

    const movementFinishCoords =
      direction === 'fromUser' || direction === 'fromBot'
        ? [tableCanvasX + BASE_WIDTH_CARD + margin, tableCanvasY]
        : [handCanvasX + card.x, handCanvasY + card.y];

    animateCardMovement(
      context,
      movementStartCoords,
      movementFinishCoords,
      card,
      direction
    );
    setTimeout(() => {
      playSound();
    }, 15);
  }

  setTimeout(() => {
    removeLayer(animtaionLayer);
  }, ANIMATION_TIME);
};
