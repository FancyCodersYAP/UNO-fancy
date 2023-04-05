import { CardType } from '../types';

export const compareCards = (
  handCard: CardType,
  upcard: CardType,
  activeColor: string
) => {
  const { color, sign, action } = handCard;

  if (action === 'wild' || action === 'wild draw four') {
    return true;
  }

  if (upcard.color === '#1F1D1E') {
    return color === activeColor;
  }

  if (color === upcard.color || sign === upcard.sign) {
    return true;
  }

  return;
};
