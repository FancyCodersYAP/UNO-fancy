import {
  xCanvasCenter,
  CANVAS_HEIGHT,
  margin,
  BASE_HEIGHT_CARD,
  MIN_X_FOR_HORIZONTAL_HANDS,
  MAX_WIDTH_HORIZONTAL_HANDS,
  MAX_HEIGHT_HORIZONTAL_HANDS,
  FLAG_DATA,
  DISTANCE_BETWEEN_FLAG_AND_NAME,
  DISTANCE_BETWEEN_NAME_AND_HAND,
} from '../utils/constants';
import { Entity } from './Entity';
import { xStartForHorizontalHands } from '../utils/helpers';

export class FrontCards extends Entity {
  private nameWidth = 0;

  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.direction = 'horizontal';
    this.yUnified = CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin;
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
    const x = xCanvasCenter;
    const y = this.yUnified - DISTANCE_BETWEEN_NAME_AND_HAND - height / 2;
    this.nameCoords = [x, y];
    this.nameWidth = width;

    return [x, y];
  }

  calcFlagCoords() {
    const x =
      this.nameCoords[0] -
      this.nameWidth -
      DISTANCE_BETWEEN_FLAG_AND_NAME -
      FLAG_DATA.RADIUS;
    const y =
      this.yUnified -
      DISTANCE_BETWEEN_NAME_AND_HAND -
      FLAG_DATA.RADIUS -
      FLAG_DATA.BORDER_WIDTH;

    return [x, y];
  }

  calcBubbleCoords() {
    const x = this.nameCoords[0] + this.nameWidth * 2;
    const y = CANVAS_HEIGHT - margin - BASE_HEIGHT_CARD - 20 - 5;

    return [x, y];
  }

  // drawSvg() {
  //   const data = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="150">' +
  //   '<foreignObject width="100%" height="100%">' +
  //   '<div xmlns="http://www.w3.org/1999/xhtml" style="background-color: green; font-size:40px; width: 100%; height: 100%">' +
  //     '<span style="color:white">' +
  //     '1</span>' +
  //   '</div>' +
  //   '</foreignObject>' +
  //   '</svg>';

  //   const DOMURL = window.URL || window.webkitURL || window;

  //   const img = new Image();
  //   const svg = new Blob([data], {type: 'image/svg+xml'});
  //   const url = DOMURL.createObjectURL(svg);
  //   const ctx = this.context;

  //   img.onload = function() {
  //     ctx.drawImage(img, 0, 0);
  //     DOMURL.revokeObjectURL(url);
  //   }

  //   img.src = url;
  // }
}
