import { HandEntityTypes } from 'game/types';

export const getHandOrientation = (
  entityName: HandEntityTypes
): HandOrientationTypes => {
  switch (entityName) {
    case 'frontHand':
    case 'topHand':
      return HandOrientationTypes.HORIZONTAL;

    case 'leftHand':
    case 'rightHand':
      return HandOrientationTypes.VERTICAL;
  }
};

export enum HandOrientationTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}
