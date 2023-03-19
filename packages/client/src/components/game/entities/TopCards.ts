import {
  xCanvasCenter,
  BASE_HEIGHT_CARD,
  margin,
  MIN_X_FOR_HORIZONTAL_HANDS,
  MAX_WIDTH_HORIZONTAL_HANDS,
  MAX_HEIGHT_HORIZONTAL_HANDS,
  FLAG_DATA,
  DISTANCE_BETWEEN_FLAG_AND_NAME,
  DISTANCE_BETWEEN_NAME_AND_HAND,
} from '../utils/constants';
import { Entity } from './Entity';
import { xStartForHorizontalHands } from '../utils/helpers';

export class TopCards extends Entity {
  private nameWidth = 0;

  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.direction = 'horizontal';
    this.yUnified = margin;
  }

  clear() {
    const x = MIN_X_FOR_HORIZONTAL_HANDS;
    const y = this.yUnified;
    const width = MAX_WIDTH_HORIZONTAL_HANDS;
    const height = MAX_HEIGHT_HORIZONTAL_HANDS;

    this.context.clearRect(x, y, width, height);
  }

  calcFirstCardCoords(numCards?: number) {
    this.xStart = xStartForHorizontalHands(
      numCards ? numCards : this.hand.length
    );
  }

  calcNameCoords(width: number, height: number) {
    const x = xCanvasCenter - width / 2;
    const y =
      this.yUnified +
      BASE_HEIGHT_CARD +
      DISTANCE_BETWEEN_NAME_AND_HAND +
      height;
    this.nameCoords = [x, y];
    this.nameWidth = width;

    return [x, y];
  }

  calcFlagCoords() {
    const x =
      this.nameCoords[0] - DISTANCE_BETWEEN_FLAG_AND_NAME - FLAG_DATA.RADIUS;
    const y =
      this.yUnified +
      BASE_HEIGHT_CARD +
      DISTANCE_BETWEEN_NAME_AND_HAND +
      FLAG_DATA.RADIUS;

    return [x, y];
  }

  calcBubbleCoords() {
    const x = this.nameCoords[0] + this.nameWidth * 2;
    const y = BASE_HEIGHT_CARD + margin + 5;

    return [x, y];
  }
}
