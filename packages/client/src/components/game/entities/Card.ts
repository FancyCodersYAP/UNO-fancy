import { BASE_WIDTH_CARD, BASE_HEIGHT_CARD, openPackCoords } from '../utils/constants';
import { CardType } from "../types";

export class Card {
    width: number;
    height: number;
    xPoint: number;
    yPoint: number;
    // cardData: CardType;
    id?: number;
    color?: string;
    digit?: string;
    context: CanvasRenderingContext2D;

    // blurRadius: number;
    
    constructor(xPoint: number, yPoint: number, cardData: CardType, context: CanvasRenderingContext2D) {
        this.width = BASE_WIDTH_CARD;
        this.height = BASE_HEIGHT_CARD;

        this.xPoint = xPoint;
        this.yPoint = yPoint;
        this.context = context;
        this.id = cardData.id;
        this.color = cardData.color;
        this.digit = cardData.digit;

        // this.blurRadius = 3;
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

        // this.context.shadowOffsetX = 1;
        // this.context.shadowOffsetY = 1;
        // this.context.shadowBlur = this.blurRadius;
        // this.context.shadowColor = 'rgba(31, 29, 30, .3)'; 
        this.context.beginPath();
        this.context.roundRect(x, y, this.width, this.height, [6]);
        if (this.color) {
            this.context.fillStyle = this.color;
        }
        this.context.fill();
        this.context.closePath();

        this.context.beginPath();
        this.context.fillStyle = "white";
        this.context.font = "48px serif";
        if (this.digit !== undefined) {
            this.context.fillText(this.digit, x + this.width / 2, y + this.height / 2);
        }
    }

    clickCard(x: number, y: number) {
        if (x >= this.xPoint && x <= this.xPoint + this.width && y >= this.yPoint && y <= this.yPoint + this.height) {
            // this.move();
            return this.id;
        }
    }

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

            boundClear(xPoint - stepX * (animateStep - 1), yPoint - stepY * (animateStep - 1));
            boundDraw(newX, newY);
            animateStep++;
        }
    }

    private clearCard(x: number, y: number) {
        this.context.clearRect(x, y, BASE_WIDTH_CARD + 1, BASE_HEIGHT_CARD + 1);
    }
}

export function cardDraw(xPoint: number, yPoint: number, cardData: CardType, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.roundRect(xPoint, yPoint, BASE_WIDTH_CARD, BASE_HEIGHT_CARD, [6]);
    context.fillStyle = cardData.color!;
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.font = "48px serif";
    if (cardData.digit !== undefined) {
        context.fillText(cardData.digit, xPoint + BASE_WIDTH_CARD / 2, yPoint + BASE_HEIGHT_CARD / 2);
    }
}