import { Card } from './Card';
import {
  closedPackCoords,
  openPackCoords,
  tableCardsCoords,
} from '../utils/constants';
import { CardType } from '../types';
import { cardBackColor } from '../utils/data';

export class TableCards {
  context: CanvasRenderingContext2D;
  tablePack: CardType[];

  cardBackColor = cardBackColor;
  closedPack: Card | null;
  openCard: Card | null;

  constructor(
    tablePack: CardType[],
    openCard: CardType,
    context: CanvasRenderingContext2D
  ) {
    this.context = context;

    this.closedPack = new Card({ color: this.cardBackColor }, this.context);
    this.openCard = new Card(openCard, this.context);
    this.tablePack = tablePack;
  }

  draw(openCard?: CardType) {
    if (openCard) {
      this.openCard = new Card(openCard, this.context);
    }

    if (this.closedPack)
      this.closedPack.draw(closedPackCoords[0], closedPackCoords[1]);
    if (this.openCard) this.openCard.draw(openPackCoords[0], openPackCoords[1]);
  }

  clear() {
    this.context.clearRect(
      tableCardsCoords[0],
      tableCardsCoords[1],
      tableCardsCoords[2],
      tableCardsCoords[3]
    );
  }

  dropCard(openCard: CardType) {
    this.clear();
    this.draw(openCard);
  }
}
