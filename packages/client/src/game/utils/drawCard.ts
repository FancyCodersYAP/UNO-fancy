import { CardType } from '../types';
import { BASE_WIDTH_CARD, BASE_HEIGHT_CARD } from './constants';
import { GAME_STYLES, CARD_STYLES, CARD_BORDER } from '../styles';

const drawCardBlackAndWhiteLayers = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
): void => {
  /* Нижний чёрный слой (для отрисовки тонкой чёрной границы) */
  ctx.beginPath();
  // @ts-ignore//TODO Катя поправь пожалуйста
  ctx.roundRect(x, y, BASE_WIDTH_CARD, BASE_HEIGHT_CARD, [
    CARD_STYLES.BORDER_RADIUS,
  ]);
  ctx.fillStyle = GAME_STYLES.BG_COLOR_DARK_BLUE;
  ctx.fill();
  ctx.closePath();

  /* Средний белый слой */
  ctx.beginPath();
  // @ts-ignore//TODO Катя поправь пожалуйста
  ctx.roundRect(
    x + CARD_STYLES.BORDER_WIDTH_BLACK,
    y + CARD_STYLES.BORDER_WIDTH_BLACK,
    BASE_WIDTH_CARD - CARD_STYLES.BORDER_WIDTH_BLACK * 2,
    BASE_HEIGHT_CARD - CARD_STYLES.BORDER_WIDTH_BLACK * 2,
    [CARD_STYLES.BORDER_RADIUS]
  );
  ctx.fillStyle = GAME_STYLES.BG_COLOR_MAIN;
  ctx.fill();
  ctx.closePath();

  /* Верхний чёрный слой */
  ctx.beginPath();
  ctx.roundRect(
    x + CARD_STYLES.BORDER_WIDTH_WHITE,
    y + CARD_STYLES.BORDER_WIDTH_WHITE,
    BASE_WIDTH_CARD - CARD_STYLES.BORDER_WIDTH_WHITE * 2,
    BASE_HEIGHT_CARD - CARD_STYLES.BORDER_WIDTH_WHITE * 2,
    [CARD_STYLES.BORDER_RADIUS]
  );
  ctx.fillStyle = GAME_STYLES.BG_COLOR_DARK_BLUE;
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
  // @ts-ignore//TODO Катя поправь пожалуйста
  ctx.roundRect(
    x + padding,
    y + padding,
    BASE_WIDTH_CARD - padding * 2,
    BASE_HEIGHT_CARD - padding * 2,
    [CARD_STYLES.BORDER_RADIUS]
  );
  ctx.fill();
  ctx.closePath();

  /* Координаты центра эллипса — массив [x, y] */
  const coords = [x + BASE_WIDTH_CARD / 2, y + BASE_HEIGHT_CARD / 2];
  /* Длины большой и малой полуосей эллипса — массив [a, b] */
  const sizes = [
    Math.floor(BASE_HEIGHT_CARD / 1.15 / 2) + 4,
    Math.floor(BASE_HEIGHT_CARD / 2.18 / 2) + 1,
  ];
  /* Вектор [x, y] наклона эллипса */
  const angle = Math.floor(Math.PI / 1.5);
  const ellipseBgd = GAME_STYLES.BG_COLOR_ELLIPSE;

  /* Отрисовка эллипса */
  drawEllipse(ctx, coords, sizes, angle, ellipseBgd);

  const fontSize = Math.floor(BASE_HEIGHT_CARD / 5);
  /* Текст */
  ctx.beginPath();
  ctx.fillStyle = GAME_STYLES.FONT_COLOR_MAIN;
  ctx.font = `bold ${fontSize}px ${GAME_STYLES.FONT_FAMILY_MAIN}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = GAME_STYLES.BG_COLOR_BLACK;
  ctx.shadowBlur = CARD_STYLES.SHADOW_BLUR;
  ctx.fillText(
    'UNO',
    x + Math.floor(BASE_WIDTH_CARD / 2),
    y + Math.floor(BASE_HEIGHT_CARD / 2)
  );
  ctx.shadowBlur = 0;
  ctx.closePath();
};

/* Отрисовка передней части карты */
export const drawCardFront = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  sign: string
): void => {
  drawCardBlackAndWhiteLayers(ctx, x, y);

  const padding = CARD_BORDER;

  /* Цветной фон */
  ctx.beginPath();
  // @ts-ignore//TODO Катя поправь пожалуйста
  ctx.roundRect(
    x + padding,
    y + padding,
    BASE_WIDTH_CARD - padding * 2,
    BASE_HEIGHT_CARD - padding * 2,
    [CARD_STYLES.BORDER_RADIUS]
  );
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

  /* Размер цифры по центру */
  /* Соотношение высоты карты и цифры по макету: 395 / 195 = 2.03 */
  const bigFontSize = Math.floor(BASE_HEIGHT_CARD / 2.03);
  /* Соотношение высоты карты и цифр по краям по макету: 395 / 58 = 6.8 */
  const smallFontSize = Math.floor(BASE_HEIGHT_CARD / 6.8);
  /* Отступы от края карты */
  /* Соотношение высоты карты и отступа от верхнего/нижнего края карты по макету: 395 / 26 = 15.2 */
  /* Соотношение высоты карты и отступа от правого/левого края карты по макету: 395 / 21 = 18.8 */
  /* TODO: 2 добавлены временно, т.к. карты отрисованы не по макету */
  const xOffset = Math.floor(BASE_HEIGHT_CARD / 18.8) + 4;
  const yOffset = Math.floor(BASE_HEIGHT_CARD / 15.2) + 4;

  /* Цвет цифр */
  ctx.fillStyle = GAME_STYLES.FONT_COLOR_MAIN;

  ctx.textAlign = 'center';

  ctx.textBaseline = 'middle';

  /* Sign по центру */
  ctx.beginPath();
  ctx.font = `${bigFontSize}px ${GAME_STYLES.FONT_FAMILY_MAIN}`;

  /* Координаты */
  const xBigSign = x + Math.floor(BASE_WIDTH_CARD / 2);
  const yBigSign = y + Math.floor(BASE_HEIGHT_CARD / 2);

  ctx.shadowColor = GAME_STYLES.FONT_COLOR_DARK;
  ctx.shadowBlur = CARD_STYLES.SHADOW_BLUR;
  ctx.fillText(sign, xBigSign, yBigSign);
  ctx.shadowBlur = 0;
  ctx.strokeStyle = GAME_STYLES.FONT_COLOR_DARK;
  ctx.lineWidth = CARD_STYLES.SIGN_BORDER_WIDTH;
  ctx.strokeText(sign, xBigSign, yBigSign);
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
  const xLeftSmallSign = x + xOffset + Math.floor(smallSignFontWidth / 2);
  const yLeftSmallSign = y + yOffset + Math.floor(smallSignFontHeight / 2);

  ctx.shadowColor = GAME_STYLES.FONT_COLOR_DARK;
  ctx.shadowBlur = CARD_STYLES.SHADOW_BLUR;
  ctx.fillText(sign, xLeftSmallSign, yLeftSmallSign);
  ctx.shadowBlur = 0;
  ctx.closePath();

  /* Sign в правом нижнем углу */
  ctx.beginPath();

  /* Координаты цифры в правом нижнем углу*/
  const xRightSmallSign =
    x + BASE_WIDTH_CARD - xOffset - Math.floor(smallSignFontWidth / 2);
  const yRightSmallSign =
    y + BASE_HEIGHT_CARD - yOffset - Math.floor(smallSignFontHeight / 2);

  ctx.shadowColor = GAME_STYLES.FONT_COLOR_DARK;
  ctx.shadowBlur = CARD_STYLES.SHADOW_BLUR;
  ctx.fillText(sign, xRightSmallSign, yRightSmallSign);
  ctx.shadowBlur = 0;
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
