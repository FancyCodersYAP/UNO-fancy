import { Card } from './Card';
import { CANVAS_HEIGHT, margin, xArray, BASE_HEIGHT_CARD } from '../utils/constants';
import { CardType } from '../types';

export class FrontCards {
  handle: Card[] = [];
  y = 0;

  cards: CardType[];
  context: CanvasRenderingContext2D;

  constructor(cards: CardType[], context: CanvasRenderingContext2D) {
    this.cards = cards;
    this.context = context;
  }

  init() {
    this.y = CANVAS_HEIGHT - BASE_HEIGHT_CARD - margin;

    for (let i = 0; i < xArray.length; i++) {
        const x = xArray[i];
        this.handle[i] = new Card(x, this.y, this.cards[i], this.context);
    }
  }

  draw() {
    for (let i = 0; i < this.handle.length; i++) {
        this.handle[i].draw();
    }
  }

  clear() {
    this.context.clearRect(10, 450, 1000, 750);
  }

  removeCard(card: CardType) {
    const removedCard = this.handle.find(c => c.id === card.id);
    this.handle = this.handle.filter(c => c.id !== card.id);
    // this.moveCard(removedCard!);
    this.clear();
    console.log(this.handle);
    
    for (let i = 0; i < this.handle.length; i++) {
      const x = xArray[i];
      this.handle[i].draw(x , this.y);
    }
  }

  addCard(card: CardType) {
    const x = xArray[this.handle.length];

    const newCard = new Card(x, this.y, card, this.context)
    this.handle.push(newCard);
  }

  moveCard(card: Card) {
    card.move();
  }
}