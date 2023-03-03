import { xHorizontalArray, yTopArray, topCardsCoors, xCenter, BASE_HEIGHT_CARD, margin } from '../utils/constants';
import { Entity } from './Entity';

export class TopCards extends Entity {
  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.xArr = xHorizontalArray;
    this.yArr = yTopArray;
    this.bubbleCoords = [xCenter - 50, BASE_HEIGHT_CARD + margin + 5];
  }

  clear() {
    this.context.clearRect(
      topCardsCoors[0],
      topCardsCoors[1],
      topCardsCoors[2],
      topCardsCoors[3]
    );
  }
}
