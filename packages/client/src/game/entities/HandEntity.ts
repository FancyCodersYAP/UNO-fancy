import { Entity } from 'game/entities';
import {
  CardMovementDirection,
  CardType,
  GamePlayerType,
  HandEntityTypes,
} from 'game/types';
import {
  drawCardBack,
  drawCardFront,
  calcStartCoords,
  calcVisiblePartOfCard,
  moveCard,
  getHandOrientation,
  createBubble,
} from 'game/utils';
import { ANIMATION_TIME } from 'game/utils/constants';

export class HandEntity extends Entity<HandEntityTypes> {
  private cards: CardType[] = [];

  private animation: Animation | null = null;

  constructor(entityName: HandEntityTypes, player: GamePlayerType) {
    super(entityName);
    this.player = player;
  }

  addCards(cards: CardType[], playSound: () => void) {
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

    const direction: CardMovementDirection = this.player?.isBot
      ? 'toBot'
      : 'toUser';
    let timer = 0;

    for (let i = 0; i < cards.length; i++) {
      cards[i].x = xCard;
      cards[i].y = yCard;
      this.cards.push(cards[i]);

      setTimeout(() => {
        moveCard(
          cards[i],
          this.entityName,
          direction,
          this.width,
          this.height,
          playSound
        );
      }, timer);

      setTimeout(() => {
        if (this.player && this.player.isBot) {
          drawCardBack(this.context, cards[i].x!, cards[i].y!);
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

      timer += ANIMATION_TIME / 2;
    }
  }

  removeCard(card: CardType, playSound: () => void) {
    this.cards = this.cards.filter(c => c.id !== card.id);

    const direction = this.player && this.player.isBot ? 'fromBot' : 'fromUser';
    moveCard(
      card,
      this.entityName,
      direction,
      this.width,
      this.height,
      playSound
    );
    playSound();
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
        {
          boxShadow: '0px 0px 40px 20px rgb(255 255 255 / 60%)',
          color: 'rgb(255 255 255)',
        },
        {
          boxShadow: '0px 0px 40px 20px rgb(255 255 255 / 20%)',
          color: 'rgb(255 255 255)',
        },
        {
          boxShadow: '0px 0px 40px 20px rgb(255 255 255 / 60%)',
          color: 'rgb(255 255 255)',
        },
      ],
      {
        duration: 1500,
        iterations: Infinity,
      }
    );
  }

  removeHighlight() {
    if (this.animation) {
      this.animation.cancel();
      this.name.style.opacity = '1';
      this.name.style.color = 'rgb(255 255 255 / 50%)';
    }
  }

  getCards() {
    return this.cards;
  }

  showTooltip() {
    const tooltip = createBubble(this.entityName);
    this.layer.appendChild(tooltip);

    setTimeout(() => {
      tooltip.remove();
    }, 2500);
  }
}
