import {
  BASE_WIDTH_CARD,
  ANIMATION_TIME,
  startZindexForLayers,
} from '../utils/constants';
import {
  shuffle,
  drawCardBack,
  drawCardFront,
  moveCard,
  cardColors,
  cardBackColor,
} from '../utils';
import { Entity } from './Entity';
import { CardType, EntityTypes, PaintedCardColor } from '../types';

export class TableEntity extends Entity<EntityTypes> {
  private closePack: CardType[] = [];
  private openPack: CardType[] = [];

  private activeColor: PaintedCardColor = '#009F66';

  constructor() {
    super('table');
  }

  start() {
    this.create(startZindexForLayers);
    drawCardBack(this.context, 0, 0);
  }

  setClosePack(cards: CardType[]) {
    this.closePack = cards;
  }

  getUpcard(): CardType {
    return this.openPack[this.openPack.length - 1];
  }

  setColor(color: PaintedCardColor) {
    this.activeColor = color;
    this.colorBox!.style.backgroundColor = color;
  }

  getActiveColor(): PaintedCardColor {
    return this.activeColor;
  }

  /* Обновление закрытой колоды когда карты заканчиваются */
  renewClosePack() {
    if (this.closePack.length <= 4) {
      const upcard = this.openPack.pop();
      const renewPack = shuffle(this.openPack);
      this.openPack.length = 0;
      this.openPack.push(upcard!);

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

    if (card.color !== cardBackColor && card.color !== this.activeColor) {
      this.setColor(card.color);
    }
  }

  giveCards(countCards: number): CardType[] {
    return this.closePack.splice(
      this.closePack.length - 1 - countCards,
      countCards
    );
  }
}