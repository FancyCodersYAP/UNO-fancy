import {
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
  openPackCoords,
} from '../utils/constants';
import { CardType } from '../types';

export class Card {
  width: number;
  height: number;
  xPoint: number;
  yPoint: number;
  id?: number;
  color?: string;
  digit?: string;
  context: CanvasRenderingContext2D;

  constructor(
    xPoint: number,
    yPoint: number,
    cardData: CardType,
    context: CanvasRenderingContext2D
  ) {
    this.width = BASE_WIDTH_CARD;
    this.height = BASE_HEIGHT_CARD;

    this.xPoint = xPoint;
    this.yPoint = yPoint;
    this.context = context;
    this.id = cardData.id;
    this.color = cardData.color;
    this.digit = cardData.digit;
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

    // const image = new Image();
    // image.src = 'http://kittyfraise.hautetfort.com/media/01/02/777825822.jpg';
    // image.onload = () => this.context.drawImage(image, x, y);

    this.context.beginPath();
    this.context.roundRect(x, y, this.width, this.height, [6]);
    if (this.color) {
      this.context.fillStyle = this.color;
    }
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'white';
    this.context.strokeRect(x + 1, y + 1, this.width - 2, this.height - 2);
    this.context.closePath();

    this.context.beginPath();
    this.context.fillStyle = 'white';
    this.context.font = '40px serif';
    if (this.digit !== undefined) {
      this.context.fillText(this.digit, x + 10, y + 50);
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
