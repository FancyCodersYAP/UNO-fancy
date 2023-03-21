import {
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
  openPackCoords,
  CARD_BORDER,
  CARD_BORDER_RADIUS,
  FONT_COLOR_MAIN,
  FONTFAMILY_MAIN,
  BG_COLOR_MAIN,
  BG_COLOR_ELLIPSE,
} from '../utils/constants';
import { CardType } from '../types';

export class Card {
  width: number;
  height: number;
  id?: number;
  color?: string;
  sign?: string;
  action?: string;
  context: CanvasRenderingContext2D;

  xPoint = 0;
  yPoint = 0;

  constructor(cardData: CardType, context: CanvasRenderingContext2D) {
    this.width = BASE_WIDTH_CARD;
    this.height = BASE_HEIGHT_CARD;

    this.context = context;
    this.id = cardData.id;
    this.color = cardData.color;
    this.sign = cardData.sign;
    this.action = cardData.action;
  }

  public draw(xStart?: number, yStart?: number) {
    if (xStart) {
      this.xPoint = xStart;
    }
    if (yStart) {
      this.yPoint = yStart;
    }

    const x = this.xPoint;
    const y = this.yPoint;

    this.context.beginPath();
    this.context.roundRect(x, y, this.width, this.height, [CARD_BORDER_RADIUS]);
    this.context.fillStyle = '#1F1D1EA1';
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.roundRect(x + 0.5, y + 0.5, this.width - 1, this.height - 1, [
      CARD_BORDER_RADIUS,
    ]);
    this.context.fillStyle = BG_COLOR_MAIN;
    this.context.fill();
    this.context.closePath();

    if (this.color === '#1F1D1E' && !this.sign) {
      this.drawCardBack(x, y);
    } else {
      this.drawCardColorSide(x, y);
    }
  }

  private drawCardBack(x: number, y: number) {
    const ctx = this.context;
    const padding = CARD_BORDER;

    if (this.color) ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.roundRect(
      x + padding,
      y + padding,
      this.width - padding * 2,
      this.height - padding * 2,
      [CARD_BORDER_RADIUS + 3]
    );
    ctx.fill();

    const coords = [x + this.width / 2, y + this.height / 2]; // координаты центра эллипса — массив [x, y]
    const sizes = [this.height / 1.15 / 2 + 4, this.height / 2.18 / 2 + 1]; // длины большой и малой полуосей эллипса — массив [a, b]
    const angle = Math.PI / 1.5; // вектор [x, y] наклона эллипса
    const ellipseBgd = BG_COLOR_ELLIPSE;

    drawEllipse(ctx, coords, sizes, angle, ellipseBgd);

    ctx.beginPath();
    ctx.fillStyle = FONT_COLOR_MAIN;
    ctx.font = `bold 30px ${FONTFAMILY_MAIN}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('UNO', x + this.width / 2, y + this.height / 2);
  }

  private drawCardColorSide(x: number, y: number) {
    const ctx = this.context;
    ctx.beginPath();
    ctx.roundRect(
      x + CARD_BORDER,
      y + CARD_BORDER,
      this.width - CARD_BORDER * 2,
      this.height - CARD_BORDER * 2,
      [CARD_BORDER_RADIUS + 3]
    );

    if (this.color) {
      ctx.fillStyle = this.color;
    }

    ctx.fill();
    ctx.closePath();

    if (this.sign !== undefined) {
      /* Размер цифры по центру */
      /* Соотношение высоты карты и цифры по макету: 395 / 195 = 2.03 */
      const bigFontSize = BASE_HEIGHT_CARD / 2.03;
      /* Соотношение высоты карты и цифр по краям по макету: 395 / 58 = 6.8 */
      const smallFontSize = BASE_HEIGHT_CARD / 6.8;
      /* Отступы от края карты */
      /* Соотношение высоты карты и отступа от верхнего/нижнего края карты по макету: 395 / 26 = 15.2 */
      /* Соотношение высоты карты и отступа от правого/левого края карты по макету: 395 / 21 = 18.8 */
      /* TODO: 2 добавлены временно, т.к. карты отрисованы не по макету */
      const xOffset = BASE_HEIGHT_CARD / 18.8 + 2;
      const yOffset = BASE_HEIGHT_CARD / 15.2 + 2;

      /* Цвет цифр */
      ctx.fillStyle = FONT_COLOR_MAIN;

      ctx.textAlign = 'center';

      ctx.textBaseline = 'middle';

      /* Sign по центру */
      ctx.beginPath();
      ctx.font = `${bigFontSize}px ${FONTFAMILY_MAIN}`;

      /* Координаты */
      const xBigSign = x + BASE_WIDTH_CARD / 2;
      const yBigSign = y + BASE_HEIGHT_CARD / 2;

      ctx.fillText(this.sign, xBigSign, yBigSign);
      ctx.closePath();

      /* Sign в левом верхнем углу */
      ctx.font = `${smallFontSize}px ${FONTFAMILY_MAIN}`;
      ctx.beginPath();

      /* Размеры маленьких цифр */
      const smallSignMetrics = ctx.measureText(this.sign);
      const smallSignFontWidth = smallSignMetrics.width;
      const smallSignFontHeight =
        smallSignMetrics.actualBoundingBoxAscent +
        smallSignMetrics.actualBoundingBoxDescent;

      /* Координаты цифры в левом верхнем углу*/
      const xLeftSmallSign = x + xOffset + smallSignFontWidth / 2;
      const yLeftSmallSign = y + yOffset + smallSignFontHeight / 2;

      ctx.fillText(this.sign, xLeftSmallSign, yLeftSmallSign);
      ctx.closePath();

      /* Sign в правом нижнем углу */
      ctx.beginPath();

      /* Координаты цифры в правом нижнем углу*/
      const xRightSmallSign =
        x + BASE_WIDTH_CARD - xOffset - smallSignFontWidth / 2;
      const yRightSmallSign =
        y + BASE_HEIGHT_CARD - yOffset - smallSignFontHeight / 2;

      ctx.fillText(this.sign, xRightSmallSign, yRightSmallSign);
      ctx.closePath();
    }
  }

  /* Анимация пока не работает */
  move() {
    const boundClear = this.clearCard.bind(this);
    const boundDraw = this.draw.bind(this);
    const xPoint = this.xPoint;
    const yPoint = this.yPoint;

    let animateStep = 0;
    const steps = 20;

    const lastX = openPackCoords[0];
    const lastY = openPackCoords[1];
    const stepX = (xPoint - lastX) / steps;
    const stepY = (yPoint - lastY) / steps;

    requestAnimationFrame(animation);

    function animation() {
      if (animateStep < steps) {
        requestAnimationFrame(animation);
      }

      const newX = xPoint - stepX * animateStep;
      const newY = yPoint - stepY * animateStep;

      boundClear(
        xPoint - stepX * (animateStep - 1),
        yPoint - stepY * (animateStep - 1)
      );
      boundDraw(newX, newY);
      animateStep++;
    }
  }

  private clearCard(x: number, y: number) {
    this.context.clearRect(x, y, BASE_WIDTH_CARD + 1, BASE_HEIGHT_CARD + 1);
  }
}

const drawEllipse = (
  ctx: CanvasRenderingContext2D,
  coords: number[],
  sizes: number[],
  angle: number,
  bgd: string
) => {
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
