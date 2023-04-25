import { clickOnHand, clickOnTable, clickOnUno } from './events';
import { EntityTypes, HandEntityTypes } from '../types';
import {
  NAME_STYLES,
  LAYER_STYLES,
  BUTTON_AND_BOX_STYLES,
  UNO_BUTTON_STYLES,
} from '../styles';

export const createLayer = (
  entityName: EntityTypes,
  zIndex: number
): HTMLDivElement => {
  const layer = document.createElement('div');

  layer.style.position = LAYER_STYLES.POSITION;
  layer.style.display = LAYER_STYLES.DISPLAY;
  layer.style.alignItems = LAYER_STYLES.ALIGN_ITEMS;
  layer.style.zIndex = zIndex.toString();

  switch (entityName) {
    case 'frontHand':
      layer.style.bottom = LAYER_STYLES.MARGIN;
      layer.style.justifyContent = LAYER_STYLES.JUSTIFY_CONTENT;
      layer.style.flexDirection = LAYER_STYLES.FLEX_DIRECTION;
      break;
    case 'topHand':
      layer.style.top = LAYER_STYLES.MARGIN;
      layer.style.justifyContent = LAYER_STYLES.JUSTIFY_CONTENT;
      layer.style.flexDirection = LAYER_STYLES.FLEX_DIRECTION;
      break;
    case 'rightHand':
      layer.style.right = LAYER_STYLES.MARGIN;
      break;
    case 'leftHand':
      layer.style.left = LAYER_STYLES.MARGIN;
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

  canvas.style.position = 'absolute';
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

  p.style.textAlign = 'center';
  p.style.color = NAME_STYLES.COLOR;
  p.style.fontSize = NAME_STYLES.SIZE;
  p.style.fontFamily = NAME_STYLES.FONT_FAMILY;
  p.style.fontWeight = NAME_STYLES.FONT_WEIGHT;
  p.style.lineHeight = '0';
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
      p.style.margin = '0';
      p.style.order = '0';
      p.style.transformOrigin = 'center';
      p.style.transform = 'rotate(270deg)';
      break;
    case 'leftHand':
      p.style.margin = '0';
      p.style.transformOrigin = 'center';
      p.style.transform = 'rotate(90deg)';
      break;
  }
  return p;
};

export const createUnoButton = (): HTMLButtonElement => {
  const button = document.createElement('button');

  button.style.height = BUTTON_AND_BOX_STYLES.HEIGHT;
  button.style.width = BUTTON_AND_BOX_STYLES.WIDTH;
  button.style.position = BUTTON_AND_BOX_STYLES.POSITION;
  button.style.margin = UNO_BUTTON_STYLES.MARGIN;
  button.style.right = UNO_BUTTON_STYLES.RIGHT;
  button.style.backgroundColor = UNO_BUTTON_STYLES.BACKGROUND_COLOR;
  button.style.borderRadius = BUTTON_AND_BOX_STYLES.BORDER_RADIUS;
  button.style.textAlign = UNO_BUTTON_STYLES.TEXT_ALIGN;
  button.style.zIndex = BUTTON_AND_BOX_STYLES.Z_INDEX;
  button.style.color = UNO_BUTTON_STYLES.COLOR;
  button.style.border = BUTTON_AND_BOX_STYLES.BORDER;
  button.style.boxShadow = BUTTON_AND_BOX_STYLES.BOX_SHADOW;
  button.textContent = 'UNO';

  button.addEventListener('click', clickOnUno);

  return button;
};

export const createColorBox = (): HTMLDivElement => {
  const div = document.createElement('div');

  div.style.height = BUTTON_AND_BOX_STYLES.HEIGHT;
  div.style.width = BUTTON_AND_BOX_STYLES.HEIGHT;
  div.style.position = BUTTON_AND_BOX_STYLES.POSITION;
  div.style.borderRadius = BUTTON_AND_BOX_STYLES.BORDER_RADIUS;
  div.style.zIndex = BUTTON_AND_BOX_STYLES.Z_INDEX;
  div.style.border = BUTTON_AND_BOX_STYLES.BORDER;
  div.style.boxShadow = BUTTON_AND_BOX_STYLES.BOX_SHADOW;
  div.style.transform = 'rotate(45deg)';
  div.style.left = '-80px';

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
