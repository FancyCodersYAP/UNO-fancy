export const CANVAS_WIDTH =
  typeof window !== 'undefined' ? window.innerWidth : 1000; //ReferenceError: window is not defined (убрал из-за этой ошибки)
export const CANVAS_HEIGHT =
  typeof window !== 'undefined' ? window.innerHeight : 1000; //Получать window нужно после того как компонент отмонтируется

export const BASE_WIDTH_CARD =
  CANVAS_WIDTH <= CANVAS_HEIGHT
    ? Math.floor(CANVAS_WIDTH / 10)
    : Math.floor(CANVAS_HEIGHT / 7);
export const BASE_HEIGHT_CARD = Math.floor(BASE_WIDTH_CARD * 1.5);
export const NOT_FOUND_PAGE_WIDTH_CARD = 130;
export const NOT_FOUND_PAGE_HEIGHT_CARD = NOT_FOUND_PAGE_WIDTH_CARD * 1.5;

export const START_NUM_CARDS_IN_HAND = 7;

export const margin = 20;
export const startZindexForLayers = 10;

export const MOVEMENT_ANIMATION_TIME = 500;
export const FLIPPING_ANIMATION_TIME = 200;
export const ANIMATION_TIME =
  MOVEMENT_ANIMATION_TIME + FLIPPING_ANIMATION_TIME * 2;
