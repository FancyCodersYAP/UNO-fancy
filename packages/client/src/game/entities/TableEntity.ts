import { BASE_WIDTH_CARD, ANIMATION_TIME } from '../utils/constants';
import { shuffle, drawCardBack, drawCardFront, moveCard } from '../utils';
import { Entity } from './Entity';
import { CardType } from '../types';

export class TableEntity extends Entity {
  closePack: CardType[] = [];
  openPack: CardType[] = [];

  constructor() {
    super('table');
  }

  start() {
    this.create(10);
    drawCardBack(this.context, 0, 0);
  }

  setClosePack(cards: CardType[]) {
    this.closePack = cards;
  }

  getUpcard() {
    return this.openPack[this.openPack.length - 1];
  }

  setColor(color: string) {
    this.colorBox!.style.backgroundColor = color;
  }

  getColor() {
    return this.colorBox!.style.backgroundColor;
  }

  /* Обновление закрытой колоды когда карты заканчиваются */
  renewClosePack() {
    if (this.closePack.length <= 4) {
      const upcard = this.openPack.pop();
      const renewPack = shuffle(this.openPack) as CardType[];
      this.openPack.length = 0;
      this.openPack.push(upcard as CardType);

      for (let i = 0; i < this.closePack.length; i++) {
        renewPack.push(this.closePack[i]);
      }
      this.closePack.length = 0;
      this.closePack = renewPack;
    }
  }

  addUpcard(card: CardType) {
    card.x = this.width - BASE_WIDTH_CARD;
    card.y = 0;

    this.openPack.push(card);

    if (this.openPack.length === 1) {
      moveCard(card, this.entityName, 'fromTable', this.width, this.height);
    }

    setTimeout(() => {
      drawCardFront(this.context, card.x!, card.y!, card.color, card.sign);
    }, ANIMATION_TIME);

    if (card.color !== this.getColor() && card.color !== '#1F1D1E') {
      this.setColor(card.color);
    }
  }

  giveCards(countCards: number) {
    return this.closePack.splice(
      this.closePack.length - 1 - countCards,
      countCards
    );
  }
}
