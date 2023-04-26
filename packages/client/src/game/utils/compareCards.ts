import { CardType } from 'game/types';

export const compareCardWithUpcard = (
  handCard: CardType,
  upcard: CardType,
  activeColor: string
): boolean => {
  const { color, sign, action } = handCard;

  if (action === 'wild' || action === 'wild draw four') {
    return true;
  }

  if (color === upcard.color || sign === upcard.sign) {
    return true;
  }

  return color === activeColor;
};
