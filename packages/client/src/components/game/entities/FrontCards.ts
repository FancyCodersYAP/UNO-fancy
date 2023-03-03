import {
  xHorizontalArray,
  yBottomArray,
  fronCardsCoords,
  xCenter,
  CANVAS_HEIGHT,
  margin,
  BASE_HEIGHT_CARD
} from '../utils/constants';
import { Entity } from './Entity';

export class FrontCards extends Entity {
  constructor(context: CanvasRenderingContext2D) {
    super(context);
    
    this.xArr = xHorizontalArray;
    this.yArr = yBottomArray;
    this.bubbleCoords = [xCenter - 50, CANVAS_HEIGHT - margin - BASE_HEIGHT_CARD - 20 - 5];
  }

  clear() {
    this.context.clearRect(
      fronCardsCoords[0],
      fronCardsCoords[1],
      fronCardsCoords[2],
      fronCardsCoords[3]
    );
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
