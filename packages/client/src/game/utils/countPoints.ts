import { CardType } from 'game/types';

export const countPoints = (cards: CardType[]): number => {
  let points = 0;

  for (const card of cards) {
    switch (card.sign) {
      case '∅':
      case '↻':
      case '+2':
        points += 20;
        break;
      case '⊕':
      case '+4':
        points += 50;
        break;
      default:
        points += Number(card.sign);
    }
  }

  return points;
};
