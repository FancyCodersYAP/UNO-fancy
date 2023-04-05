export type CardType = {
  id: number;
  sign: string;
  color: string;
  action?: string;
  x?: number;
  y?: number;
};

export type GamePlayerType = {
  playerId?: number;
  name?: string;
  isBot?: boolean;
};

export enum HandOrientationTypes {
  'frontHand' = 'horizontal',
  'topHand' = 'horizontal',
  'rightHand' = 'vertical',
  'leftHand' = 'vertical',
}

export type HandEntityTypes =
  | 'rightHand'
  | 'leftHand'
  | 'topHand'
  | 'frontHand';
export type EntityTypes = 'table' | HandEntityTypes;
export type AnimatedCardType = 'close' | 'open';
export type CardMovementDirection = 'fromUser' | 'fromBot' | 'fromTable';
