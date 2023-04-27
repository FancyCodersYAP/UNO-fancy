import { CardType } from '../types';
import {
  CARD_BORDER,
  CARD_BORDER_RADIUS,
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
} from './constants';
import { GAME_STYLES } from '../styles';

const drawCardBlackAndWhiteLayers = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  cardWidth: number = BASE_WIDTH_CARD,
  cardHeight: number = BASE_HEIGHT_CARD
): void => {
  /* Нижний чёрный слой (для отрисовки тонкой чёрной границы) */
  ctx.beginPath();
  // @ts-ignore //TODO Катя поправь пожалуйста
  ctx.roundRect(x, y, cardWidth, cardHeight, [CARD_BORDER_RADIUS]);
  ctx.fillStyle = GAME_STYLES.BG_COLOR_BLACK;
  ctx.fill();
  ctx.closePath();

  /* Средний белый слой */
  ctx.beginPath();
  // @ts-ignore //TODO Катя поправь пожалуйста
  ctx.roundRect(x + 0.5, y + 0.5, cardWidth - 1, cardHeight - 1, [
    CARD_BORDER_RADIUS,
  ]);
  ctx.fillStyle = GAME_STYLES.BG_COLOR_MAIN;
  ctx.fill();
  ctx.closePath();
};

const drawEllipse = (
  ctx: CanvasRenderingContext2D,
  coords: number[],
  sizes: number[],
  angle: number,
  bgd: string
): void => {
  ctx.fillStyle = bgd;
  ctx.beginPath();
  ctx.save(); // сохраняем стейт контекста
  ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
  ctx.rotate(angle); // поворачиваем координатную сетку на нужный угол
  ctx.scale(1, sizes[1] / sizes[0] - 1); // сжимаем по вертикали
  ctx.arc(0, 0, sizes[0], 0, Math.PI * 2); // рисуем круг
  ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
  ctx.fill();
  ctx.closePath();
};

/* Отрисовка рубашки */
export const drawCardBack = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
): void => {
  drawCardBlackAndWhiteLayers(ctx, x, y);

  const padding = CARD_BORDER;

  /* Чёрный фон */
  ctx.beginPath();
  ctx.fillStyle = GAME_STYLES.BG_COLOR_BLACK;
  // @ts-ignore //TODO Катя поправь пожалуйста
  ctx.roundRect(
    x + padding,
    y + padding,
    BASE_WIDTH_CARD - padding * 2,
    BASE_HEIGHT_CARD - padding * 2,
    [CARD_BORDER_RADIUS + 3]
  );
  ctx.fill();
  ctx.closePath();

  /* Координаты центра эллипса — массив [x, y] */
  const coords = [x + BASE_WIDTH_CARD / 2, y + BASE_HEIGHT_CARD / 2];
  /* Длины большой и малой полуосей эллипса — массив [a, b] */
  const sizes = [
    BASE_HEIGHT_CARD / 1.15 / 2 + 4,
    BASE_HEIGHT_CARD / 2.18 / 2 + 1,
  ];
  /* Вектор [x, y] наклона эллипса */
  const angle = Math.PI / 1.5;
  const ellipseBgd = GAME_STYLES.BG_COLOR_ELLIPSE;

  /* Отрисовка эллипса */
  drawEllipse(ctx, coords, sizes, angle, ellipseBgd);

  const fontSize = BASE_HEIGHT_CARD / 5;
  /* Текст */
  ctx.beginPath();
  ctx.fillStyle = GAME_STYLES.FONT_COLOR_MAIN;
  ctx.font = `bold ${fontSize}px ${GAME_STYLES.FONT_FAMILY_MAIN}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('UNO', x + BASE_WIDTH_CARD / 2, y + BASE_HEIGHT_CARD / 2);
  ctx.closePath();
};

/* Отрисовка передней части карты */
export const drawCardFront = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  sign: string,
  width?: number,
  height?: number,
): void => {
  const cardWidth = width || BASE_WIDTH_CARD;
  const cardHeight = height || BASE_HEIGHT_CARD;

  drawCardBlackAndWhiteLayers(ctx, x, y, cardWidth, cardHeight);

  /* Цветной фон */
  ctx.beginPath();
  // @ts-ignore //TODO Катя поправь пожалуйста
  ctx.roundRect(
    x + CARD_BORDER,
    y + CARD_BORDER,
    cardWidth - CARD_BORDER * 2,
    cardHeight - CARD_BORDER * 2,
    [CARD_BORDER_RADIUS + 3]
  );
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

  /* Размер цифры по центру */
  /* Соотношение высоты карты и цифры по макету: 395 / 195 = 2.03 */
  const bigFontSize = cardHeight / 2.03;
  /* Соотношение высоты карты и цифр по краям по макету: 395 / 58 = 6.8 */
  const smallFontSize = cardHeight / 6.8;
  /* Отступы от края карты */
  /* Соотношение высоты карты и отступа от верхнего/нижнего края карты по макету: 395 / 26 = 15.2 */
  /* Соотношение высоты карты и отступа от правого/левого края карты по макету: 395 / 21 = 18.8 */
  /* TODO: 2 добавлены временно, т.к. карты отрисованы не по макету */
  const xOffset = cardHeight / 18.8 + 2;
  const yOffset = cardHeight / 15.2 + 2;

  /* Цвет цифр */
  ctx.fillStyle = GAME_STYLES.FONT_COLOR_MAIN;

  ctx.textAlign = 'center';

  ctx.textBaseline = 'middle';

  /* Sign по центру */
  ctx.beginPath();
  ctx.font = `${bigFontSize}px ${GAME_STYLES.FONT_FAMILY_MAIN}`;

  /* Координаты */
  const xBigSign = x + cardWidth / 2;
  const yBigSign = y + cardHeight / 2;

  ctx.fillText(sign, xBigSign, yBigSign);
  ctx.closePath();

  /* Sign в левом верхнем углу */
  ctx.font = `${smallFontSize}px ${GAME_STYLES.FONT_FAMILY_MAIN}`;
  ctx.beginPath();

  /* Размеры маленьких цифр */
  const smallSignMetrics = ctx.measureText(sign);
  const smallSignFontWidth = smallSignMetrics.width;
  const smallSignFontHeight =
    smallSignMetrics.actualBoundingBoxAscent +
    smallSignMetrics.actualBoundingBoxDescent;

  /* Координаты цифры в левом верхнем углу*/
  const xLeftSmallSign = x + xOffset + smallSignFontWidth / 2;
  const yLeftSmallSign = y + yOffset + smallSignFontHeight / 2;

  ctx.fillText(sign, xLeftSmallSign, yLeftSmallSign);
  ctx.closePath();

  /* Sign в правом нижнем углу */
  ctx.beginPath();

  /* Координаты цифры в правом нижнем углу*/
  const xRightSmallSign = x + cardWidth - xOffset - smallSignFontWidth / 2;
  const yRightSmallSign = y + cardHeight - yOffset - smallSignFontHeight / 2;

  ctx.fillText(sign, xRightSmallSign, yRightSmallSign);
  ctx.closePath();
};

/* Удаление карты с канваса */
export const clearCard = (
  card: CardType,
  ctx: CanvasRenderingContext2D
): void => {
  const x = card.x;
  const y = card.y;

  if (x && y) {
    ctx.clearRect(x, y, BASE_WIDTH_CARD, BASE_HEIGHT_CARD);
  }
};
