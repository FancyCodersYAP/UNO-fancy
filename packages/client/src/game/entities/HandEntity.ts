import { drawCardBack, drawCardFront } from '../utils/drawCard';
import { Entity } from './Entity';
import { CardType, GamePlayerType, HandEntityTypes } from '../types';
import { calcStartCoords, calcVisiblePartOfCard, moveCard } from '../utils';
import { ANIMATION_TIME } from '../utils/constants';
import { getHandOrientation } from '../utils/getHandOrientation';

export class HandEntity extends Entity<HandEntityTypes> {
  private cards: CardType[] = [];

  private animation: Animation | null = null;

  constructor(entityName: HandEntityTypes, player: GamePlayerType) {
    super(entityName);
    this.player = player;
  }

  addCards(cards: CardType[]) {
    const totalCards = this.cards.length + cards.length;
    const handType = getHandOrientation(this.entityName);
    const layerSize = handType === 'horizontal' ? this.width : this.height;

    const visiblePart = calcVisiblePartOfCard(
      totalCards,
      this.entityName as HandEntityTypes
    );

    let { xCard, yCard }: Record<string, number> = { x: 0, y: 0 };

    if (this.cards.length !== 0) {
      const { x, y } = this.redrawHand(totalCards, visiblePart);
      xCard = x;
      yCard = y;
    } else {
      const { x, y } = calcStartCoords(
        totalCards,
        visiblePart,
        this.entityName,
        layerSize
      );
      xCard = x;
      yCard = y;
    }

    let timer = 0;

    for (let i = 0; i < cards.length; i++) {
      cards[i].x = xCard;
      cards[i].y = yCard;
      this.cards.push(cards[i]);

      setTimeout(() => {
        moveCard(
          cards[i],
          this.entityName,
          'fromTable',
          this.width,
          this.height
        );
      }, timer);

      setTimeout(() => {
        if (this.player && this.player.isBot) {
          drawCardBack(this.context, cards[i].x!, cards[i].y!);
          // drawCardFront(
          //   this.context,
          //   cards[i].x!,
          //   cards[i].y!,
          //   cards[i].color,
          //   cards[i].sign
          // );
        } else {
          drawCardFront(
            this.context,
            cards[i].x!,
            cards[i].y!,
            cards[i].color,
            cards[i].sign
          );
        }
      }, timer + ANIMATION_TIME);

      if (handType === 'horizontal') {
        xCard += visiblePart;
      } else {
        yCard += visiblePart;
      }

      timer += ANIMATION_TIME;
    }
  }

  removeCard(card: CardType) {
    this.cards = this.cards.filter(c => c.id !== card.id);

    const direction = this.player && this.player.isBot ? 'fromBot' : 'fromUser';
    moveCard(card, this.entityName, direction, this.width, this.height);

    this.clear();
    this.redrawHand();
  }

  redrawHand(totalCards?: number, visiblePart?: number) {
    this.clear();

    if (totalCards === undefined) {
      totalCards = this.cards.length;
    }

    if (visiblePart === undefined) {
      visiblePart = calcVisiblePartOfCard(totalCards, this.entityName);
    }

    const handType = getHandOrientation(this.entityName);
    const layerSize = handType === 'horizontal' ? this.width : this.height;

    let { x, y } = calcStartCoords(
      totalCards,
      visiblePart,
      this.entityName,
      layerSize
    );

    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].x = x;
      this.cards[i].y = y;

      const { color, sign } = this.cards[i];
      if (color !== undefined && sign !== undefined) {
        if (this.player && this.player.isBot) {
          drawCardBack(this.context, x, y);
          // drawCardFront(this.context, x, y, color, sign);
        } else {
          drawCardFront(this.context, x, y, color, sign);
        }
      }

      if (handType === 'horizontal') {
        x += visiblePart;
      } else {
        y += visiblePart;
      }
    }

    /* Возвращаем координаты, начиная с которых дорисовываем карты, которые игрок взял на руку */
    return { x: x, y: y };
  }

  highlight() {
    this.animation = this.name.animate(
      [
        { opacity: 1, easing: 'ease-out' },
        { opacity: 0.4, color: 'red', easing: 'ease-out' },
        { opacity: 1 },
      ],
      {
        duration: 1000,
        iterations: Infinity,
      }
    );
  }

  removeHighlight() {
    if (this.animation) {
      this.animation.cancel();
      this.name.style.opacity = '1';
      this.name.style.color = 'white';
    }
  }

  getCards() {
    return this.cards;
  }
}
