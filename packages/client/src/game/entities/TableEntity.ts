import {
  BASE_WIDTH_CARD,
  ANIMATION_TIME,
  startZindexForLayers,
} from 'game/utils/constants';
import {
  shuffle,
  drawCardBack,
  drawCardFront,
  moveCard,
  cardBackColor,
} from 'game/utils';
import { Entity } from 'game/entities';
import { CardType, EntityTypes, PaintedCardColor } from 'game/types';

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
      const renewPack = shuffle([...this.openPack]);
      this.openPack.length = 0;
      this.openPack.push(upcard!);

      for (let i = 0; i < this.closePack.length; i++) {
        renewPack.push(this.closePack[i]);
      }
      this.closePack.length = 0;
      this.closePack = renewPack;
    }
  }

  addUpcard(card: CardType, playSound?: () => void) {
    card.x = this.width - BASE_WIDTH_CARD;
    card.y = 0;

    this.openPack.push(card);

    if (this.openPack.length === 1) {
      moveCard(
        card,
        this.entityName,
        'onTable',
        this.width,
        this.height,
        playSound!
      );
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
      this.closePack.length - countCards,
      countCards
    );
  }

  reset() {
    this.activeColor = '#009F66';
    this.openPack = [];
    this.closePack = [];
  }
}
