import {
  xRightArray,
  yVerticalArray,
  rightCardsCoors,
} from '../utils/constants';
import { Entity } from './Entity';

export class RightCards extends Entity {
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    
    this.xArr = xRightArray;
    this.yArr = yVerticalArray;
  }

  clear() {
    this.context.clearRect(
      rightCardsCoors[0],
      rightCardsCoors[1],
      rightCardsCoors[2],
      rightCardsCoors[3]
    );
  }
}
