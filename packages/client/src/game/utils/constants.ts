export const CANVAS_WIDTH = 1000; //ReferenceError: window is not defined (убрал из-за этой ошибки)
export const CANVAS_HEIGHT = 1000; //Получать window нужно после того как компонент отмонтируется

export const BASE_WIDTH_CARD =
  CANVAS_WIDTH <= CANVAS_HEIGHT ? CANVAS_WIDTH / 10 : CANVAS_HEIGHT / 7;
export const BASE_HEIGHT_CARD = BASE_WIDTH_CARD * 1.5;
export const CARD_BORDER = BASE_HEIGHT_CARD / 29.5;
export const CARD_BORDER_RADIUS = 6;

export const START_NUM_CARDS_IN_HAND = 7;

export const margin = 20;
export const startZindexForLayers = 10;

export const ANIMATION_TIME = 500;
