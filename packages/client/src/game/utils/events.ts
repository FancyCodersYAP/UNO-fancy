import { controller } from '../Controller';

export const clickOnHand = (event: MouseEvent) => {
  controller.move({ x: event.offsetX, y: event.offsetY });
};

export const clickOnTable = (event: MouseEvent) => {
  controller.tableClick({ x: event.offsetX, y: event.offsetY });
};

export const clickOnUno = () => {
  controller.unoClick();
};
