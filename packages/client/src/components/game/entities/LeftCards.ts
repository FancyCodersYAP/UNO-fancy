import {
  BASE_WIDTH_CARD,
  margin,
  MIN_Y_FOR_VERTICAL_HANDS,
  MAX_WIDTH_VERTICAL_HANDS,
  MAX_HEIGHT_VERTICAL_HANDS,
  yCanvasCenter,
  DISTANCE_BETWEEN_NAME_AND_HAND,
  FLAG_DATA,
  DISTANCE_BETWEEN_FLAG_AND_NAME,
} from '../utils/constants';
import { Entity } from './Entity';
import { yStartForVerticalHands } from '../utils/helpers';

export class LeftCards extends Entity {
  private nameWidth = 0;

  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.direction = 'vertical';
    this.xUnified = margin;
  }

  clear() {
    const x = this.xUnified;
    const y = MIN_Y_FOR_VERTICAL_HANDS;
    const width = MAX_WIDTH_VERTICAL_HANDS;
    const height = MAX_HEIGHT_VERTICAL_HANDS;

    this.context.clearRect(x, y, width, height);
  }

  calcFirstCardCoords(numCards?: number) {
    this.yStart = yStartForVerticalHands(
      numCards ? numCards : this.hand.length
    );
  }

  calcNameCoords(width: number, height: number) {
    /* Запоминаем ширину текста. При расчёте y для флага нужно добавить ширину текста */
    this.nameWidth = width;
    /* Т.к. имя перевёрнуто, x теперь по вертикали, y - по горизонтали */
    const y =
      this.xUnified + BASE_WIDTH_CARD + DISTANCE_BETWEEN_NAME_AND_HAND + height;
    const x = yCanvasCenter - width / 2;
    this.nameCoords = [y, x];

    /* Записываем координаты имени в привычной системе координат */
    return [x, y];
  }

  calcFlagCoords() {
    const x =
      this.xUnified +
      BASE_WIDTH_CARD +
      DISTANCE_BETWEEN_NAME_AND_HAND +
      FLAG_DATA.RADIUS;
    const y =
      this.nameCoords[1] +
      DISTANCE_BETWEEN_FLAG_AND_NAME +
      FLAG_DATA.RADIUS +
      this.nameWidth;

    return [x, y];
  }

  calcBubbleCoords() {
    const x = this.xUnified + BASE_WIDTH_CARD + DISTANCE_BETWEEN_NAME_AND_HAND;
    const y =
      this.nameCoords[1] - DISTANCE_BETWEEN_FLAG_AND_NAME - this.nameWidth;

    return [x, y];
  }
}
