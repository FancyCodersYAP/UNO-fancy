import { BASE_WIDTH_CARD, margin, ANIMATION_TIME } from './constants';
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
  cardView: AnimatedCardType
) => {
  const startTime = performance.now();
  const animationTime = ANIMATION_TIME;
  let animateStep = 0;

  const xLength = startCoords[0] - finishCoords[0];
  const yLength = startCoords[1] - finishCoords[1];

  requestAnimationFrame(animate);

  function animate() {
    const time = performance.now();
    const shiftTime = time - startTime;
    const multiply = shiftTime / animationTime;

    if (multiply < 1) {
      requestAnimationFrame(animate);
    }

    const newX = startCoords[0] - xLength * multiply;
    const newY = startCoords[1] - yLength * multiply;

    context.clearRect(0, 0, 5000, 5000);
    if (cardView === 'open')
      drawCardFront(context, newX, newY, card.color, card.sign);
    if (cardView === 'close') drawCardBack(context, newX, newY);
    animateStep++;
  }
};

export const moveCard = (
  card: CardType,
  handEntityName: EntityTypes,
  direction: CardMovementDirection,
  layerWidth: number,
  layerHeight: number
) => {
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
    1000
  );
  const context = animtaionLayer.getContext('2d') as CanvasRenderingContext2D;

  if (card.x !== undefined && card.y !== undefined) {
    const movementStartCoords =
      direction === 'fromTable'
        ? [tableCanvasX, tableCanvasY]
        : [handCanvasX + card.x, handCanvasY + card.y];

    const movementFinishCoords =
      direction === 'fromTable'
        ? [handCanvasX + card.x, handCanvasY + card.y]
        : [tableCanvasX + BASE_WIDTH_CARD + margin, tableCanvasY];

    const cardView = direction === 'fromUser' ? 'open' : 'close';

    animateCardMovement(
      context,
      movementStartCoords,
      movementFinishCoords,
      card,
      cardView
    );
  }

  setTimeout(() => {
    removeLayer(animtaionLayer);
  }, ANIMATION_TIME);
};
