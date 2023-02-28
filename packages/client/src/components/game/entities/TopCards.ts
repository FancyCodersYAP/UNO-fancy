import { Card } from './Card';
import { margin, xArray } from '../utils/constants';
import { CardType } from '../types';

export class TopCards {
  handle: Card[] = [];
  y = margin;

  cards: CardType[];
  context: CanvasRenderingContext2D;

  constructor(cards: CardType[], context: CanvasRenderingContext2D) {
      this.cards = cards;
      this.context = context;
  }

  init() {
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
    this.context.clearRect(10, 10, 1000, 150);
  }

  removeCard(card: CardType) {
    const removedCard = this.handle.find(c => c.id === card.id);
    this.handle = this.handle.filter(c => c.id !== card.id);
    // this.moveCard(removedCard!);
    this.clear();
    
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