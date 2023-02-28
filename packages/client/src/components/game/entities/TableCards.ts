import { Card, cardDraw } from './Card';
import { closedPackCoords, openPackCoords } from '../utils/constants';
import { CardType } from '../types';

export class TableCards {
  context: CanvasRenderingContext2D;

  cardBackColor = '#1F1D1E';
  closedPack: Card | null = null;
  openCard: Card | null = null;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  init(openCard: CardType) {
    this.closedPack = new Card(closedPackCoords[0], closedPackCoords[1], {color: this.cardBackColor}, this.context);
    this.openCard = new Card(openPackCoords[0], openPackCoords[1], openCard, this.context);
  }

  draw(openCard?: CardType) {
    if (openCard) this.openCard = new Card(openPackCoords[0], openPackCoords[1], openCard, this.context);

    if (this.closedPack) this.closedPack.draw();
    if (this.openCard) this.openCard.draw();
  }

  clear() {
    this.context.clearRect(10, 200, 1000, 250);
  }

  discardCard(openCard: CardType) {
    this.clear();
    this.draw(openCard);
  }
}