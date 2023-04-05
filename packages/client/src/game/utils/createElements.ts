import { clickOnHand, clickOnTable, clickOnUno } from './events';
import { EntityTypes, HandEntityTypes } from '../types';
import {
  NAME_STYLES,
  LAYER_STYLES,
  BUTTON_AND_BOX_STYLES,
  UNO_BUTTON_STYLES,
} from '../styles';

export const createLayer = (entityName: EntityTypes, zIndex: number) => {
  const layer = document.createElement('div');

  layer.style.position = LAYER_STYLES.POSITION;
  layer.style.display = LAYER_STYLES.DISPLAY;
  layer.style.alignItems = LAYER_STYLES.ALIGNITEMS;
  layer.style.zIndex = zIndex.toString();

  switch (entityName) {
    case 'frontHand':
      layer.style.bottom = LAYER_STYLES.MARGIN;
      layer.style.justifyContent = LAYER_STYLES.JUSTIFYCONTENT;
      layer.style.flexDirection = LAYER_STYLES.FLEXDIRECTION;
      break;
    case 'topHand':
      layer.style.top = LAYER_STYLES.MARGIN;
      layer.style.justifyContent = LAYER_STYLES.JUSTIFYCONTENT;
      layer.style.flexDirection = LAYER_STYLES.FLEXDIRECTION;
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
) => {
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
) => {
  const canvas = createCanvas('animation', width, height, zIndex);

  canvas.style.position = 'absolute';
  canvas.style.zIndex = zIndex.toString();

  const gamePage = document.getElementById('game-page');
  if (gamePage) gamePage.appendChild(canvas);

  return canvas;
};

export const createNameLayer = (entityName: HandEntityTypes, name: string) => {
  const p = document.createElement('p');

  p.style.textAlign = 'center';
  p.style.color = NAME_STYLES.COLOR;
  p.style.fontSize = NAME_STYLES.SIZE;
  p.style.fontFamily = NAME_STYLES.FONTFAMILY;
  p.style.fontWeight = NAME_STYLES.FONTWEIGHT;
  p.textContent = `${name.toLocaleUpperCase()}`;

  switch (entityName) {
    case 'frontHand':
      p.style.margin = '0 0 5px 0';
      p.style.order = '0';
      break;
    case 'topHand':
      p.style.margin = '5px 0 0 0';
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

export const createUnoButton = () => {
  const button = document.createElement('button');

  button.style.height = BUTTON_AND_BOX_STYLES.HEIGHT;
  button.style.width = BUTTON_AND_BOX_STYLES.WIDTH;
  button.style.position = BUTTON_AND_BOX_STYLES.POSITION;
  button.style.margin = UNO_BUTTON_STYLES.MARGIN;
  button.style.right = UNO_BUTTON_STYLES.RIGHT;
  button.style.backgroundColor = UNO_BUTTON_STYLES.BACKGROUNDCOLOR;
  button.style.borderRadius = BUTTON_AND_BOX_STYLES.BORDERRADIUS;
  button.style.textAlign = UNO_BUTTON_STYLES.TEXTALIGN;
  button.style.zIndex = BUTTON_AND_BOX_STYLES.ZINDEX;
  button.style.color = UNO_BUTTON_STYLES.COLOR;
  button.style.border = UNO_BUTTON_STYLES.BORDER;
  button.textContent = 'UNO';

  button.addEventListener('click', clickOnUno);

  return button;
};

export const createColorBox = () => {
  const div = document.createElement('div');

  div.style.height = BUTTON_AND_BOX_STYLES.HEIGHT;
  div.style.width = BUTTON_AND_BOX_STYLES.WIDTH;
  div.style.position = BUTTON_AND_BOX_STYLES.POSITION;
  div.style.borderRadius = BUTTON_AND_BOX_STYLES.BORDERRADIUS;
  div.style.zIndex = BUTTON_AND_BOX_STYLES.ZINDEX;
  div.style.left = '-80px';

  return div;
};

/* Удаление слоя из DOM */
export const removeLayer = (layer: HTMLCanvasElement | HTMLDivElement) => {
  layer.remove();
};

/* Удаление DOM-элементов со страницы игры */
export const clearGamePage = (elements: HTMLDivElement[]) => {
  for (let i = 0; i < elements.length; i++) {
    removeLayer(elements[i]);
  }
};
