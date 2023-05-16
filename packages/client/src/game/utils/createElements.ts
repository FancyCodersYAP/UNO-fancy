import { clickOnHand, clickOnTable, clickOnUno } from 'game/utils/events';
import { EntityTypes, HandEntityTypes } from 'game/types';
import {
  BUBBLE_STYLES,
  COLOR_BOX_STYLES,
  NAME_STYLES,
  UNO_BUTTON_STYLES,
} from 'game/styles';

export const createLayer = (
  entityName: EntityTypes,
  zIndex: number
): HTMLDivElement => {
  const layer = document.createElement('div');
  layer.classList.add('layer');
  layer.style.zIndex = zIndex.toString();

  switch (entityName) {
    case 'frontHand':
      layer.classList.add('layer_front', 'layer-horizontal');
      break;
    case 'topHand':
      layer.classList.add('layer_top', 'layer-horizontal');
      break;
    case 'rightHand':
      layer.classList.add('layer_right');
      break;
    case 'leftHand':
      layer.classList.add('layer_left');
      break;
  }

  const gamePage = document.getElementById('game-page');
  if (gamePage) gamePage.appendChild(layer);

  return layer;
};

export const createCanvas = (
  entityName: EntityTypes | 'animation',
  width: number,
  height: number,
  zIndex: number
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;
  canvas.style.zIndex = zIndex.toString();

  if (entityName === 'frontHand') {
    canvas.style.order = '1';
    canvas.addEventListener('click', clickOnHand);
  }

  if (entityName === 'rightHand') {
    canvas.style.order = '1';
  }

  if (entityName === 'table') {
    canvas.addEventListener('click', clickOnTable);
  }

  return canvas;
};

export const createAnimationCanvas = (
  width: number,
  height: number,
  zIndex: number
): HTMLCanvasElement => {
  const canvas = createCanvas('animation', width, height, zIndex);
  canvas.classList.add('canvas_animation');
  canvas.style.zIndex = zIndex.toString();

  const gamePage = document.getElementById('game-page');
  if (gamePage) gamePage.appendChild(canvas);

  return canvas;
};

export const createNameLayer = (
  entityName: HandEntityTypes,
  name: string
): HTMLParagraphElement => {
  const p = document.createElement('p');
  p.classList.add('name_layer');
  p.style.fontSize = NAME_STYLES.SIZE;
  p.textContent = name.toLocaleUpperCase();

  switch (entityName) {
    case 'frontHand':
      p.style.margin = '0 0 20px 0';
      p.style.order = '0';
      break;
    case 'topHand':
      p.style.margin = '20px 0 0 0';
      break;
    case 'rightHand':
      p.style.order = '0';
      p.style.transformOrigin = 'center';
      p.style.transform = 'rotate(270deg)';
      break;
    case 'leftHand':
      p.style.transformOrigin = 'center';
      p.style.transform = 'rotate(90deg)';
      break;
  }
  return p;
};

export const createUnoButton = (): HTMLButtonElement => {
  const button = document.createElement('button');
  button.classList.add('uno_button', 'button_and_box');
  button.style.cssText = `
    height: ${UNO_BUTTON_STYLES.HEIGHT};
    width: ${UNO_BUTTON_STYLES.WIDTH};
    right: ${UNO_BUTTON_STYLES.RIGHT};
    font-size: ${UNO_BUTTON_STYLES.FONT_SIZE};
  `;
  button.textContent = 'UNO';

  button.addEventListener('click', clickOnUno);

  return button;
};

export const createColorBox = (): HTMLDivElement => {
  const div = document.createElement('div');
  div.classList.add('color_box', 'button_and_box');
  div.style.cssText = `
    height: ${COLOR_BOX_STYLES.HEIGHT};
    width: ${COLOR_BOX_STYLES.WIDTH};
    left: ${COLOR_BOX_STYLES.LEFT};
  `;

  return div;
};

export const createBubble = (entityName: HandEntityTypes): HTMLDivElement => {
  const div = document.createElement('div');
  div.classList.add('bubble');
  div.style.cssText = `
    height: ${BUBBLE_STYLES.HEIGHT};
    width: ${BUBBLE_STYLES.WIDTH};
    font-size: ${BUBBLE_STYLES.FONT_SIZE};
    line-height: ${BUBBLE_STYLES.LINE_HEIGHT};
  `;
  div.textContent = 'UNO';

  switch (entityName) {
    case 'frontHand':
      div.classList.add('bubble_horizontal', 'bubble_front');
      div.style.top = BUBBLE_STYLES.MARGIN;
      break;
    case 'topHand':
      div.classList.add('bubble_horizontal', 'bubble_top');
      div.style.bottom = BUBBLE_STYLES.MARGIN;
      break;
    case 'rightHand':
      div.classList.add('bubble_vertical');
      div.style.left = BUBBLE_STYLES.MARGIN;
      break;
    case 'leftHand':
      div.classList.add('bubble_vertical');
      div.style.right = BUBBLE_STYLES.MARGIN;
      break;
  }

  return div;
};

/* Удаление слоя из DOM */
export const removeLayer = (
  layer: HTMLCanvasElement | HTMLDivElement
): void => {
  layer.remove();
};

/* Удаление DOM-элементов со страницы игры */
export const clearGamePage = (elements: HTMLDivElement[]): void => {
  for (let i = 0; i < elements.length; i++) {
    removeLayer(elements[i]);
  }
};
