import { controller } from 'game';

export const clickOnHand = (event: MouseEvent): void => {
  controller.move({ x: event.offsetX, y: event.offsetY });
};

export const clickOnTable = (event: MouseEvent): void => {
  controller.tableClick({ x: event.offsetX, y: event.offsetY });
};

export const clickOnUno = (): void => {
  controller.unoClick();
};
