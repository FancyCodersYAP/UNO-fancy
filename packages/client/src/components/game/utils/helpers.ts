import { CardType } from '../types';
import {
  xCanvasCenter,
  yCanvasCenter,
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
  MIN_X_FOR_HORIZONTAL_HANDS,
  MIN_Y_FOR_VERTICAL_HANDS,
} from './constants';

export function shuffle(array: CardType[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function sleep(fn: () => void) {
  return new Promise(resolve => {
    setTimeout(() => resolve(fn()), 1500);
  });
}

export const xStartForHorizontalHands = (totalCards: number) => {
  if (totalCards === 1) {
    return xCanvasCenter - BASE_WIDTH_CARD / 2;
  }

  if (totalCards < 5) {
    return (
      xCanvasCenter -
      (((totalCards * BASE_WIDTH_CARD) / 4) * 3 + BASE_WIDTH_CARD / 4) / 2
    );
  }

  if (totalCards >= 10) {
    const xStart =
      xCanvasCenter -
      ((totalCards * BASE_WIDTH_CARD) / 3 + (2 * BASE_WIDTH_CARD) / 3) / 2;

    if (xStart < MIN_X_FOR_HORIZONTAL_HANDS) {
      return MIN_X_FOR_HORIZONTAL_HANDS;
    }

    return xStart;
  }

  return xCanvasCenter - ((totalCards + 1) * BASE_WIDTH_CARD) / 2 / 2;
};

export const yStartForVerticalHands = (totalCards: number) => {
  if (totalCards === 1) {
    return yCanvasCenter - BASE_HEIGHT_CARD / 2;
  }

  if (totalCards < 5) {
    return yCanvasCenter - ((totalCards + 1) * BASE_HEIGHT_CARD) / 2 / 2;
  }

  if (totalCards >= 10) {
    const yStart =
      yCanvasCenter -
      ((totalCards * BASE_HEIGHT_CARD) / 4 + (3 * BASE_HEIGHT_CARD) / 4) / 2;

    if (yStart < MIN_Y_FOR_VERTICAL_HANDS) {
      return MIN_Y_FOR_VERTICAL_HANDS;
    }

    return yStart;
  }

  return (
    yCanvasCenter -
    ((totalCards * BASE_HEIGHT_CARD) / 3 + (2 * BASE_HEIGHT_CARD) / 3) / 2
  );
};
