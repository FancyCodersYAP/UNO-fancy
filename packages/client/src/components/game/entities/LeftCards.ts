import { xLeftArray, yVerticalArray, leftCardsCoors } from '../utils/constants';
import { Entity } from './Entity';

export class LeftCards extends Entity {
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    
    this.xArr = xLeftArray;
    this.yArr = yVerticalArray;
  }

  clear() {
    this.context.clearRect(
      leftCardsCoors[0],
      leftCardsCoors[1],
      leftCardsCoors[2],
      leftCardsCoors[3]
    );
  }
}
