import { FourPlayerLayers } from './utils';
import { cardColors, cardBackColor } from './utils';

export type CardType = {
  id: number;
  sign: string;
  color: PaintedCardColor | typeof cardBackColor;
  action?: string;
  x?: number;
  y?: number;
};

export type PaintedCardColor = typeof cardColors[number];

export type GamePlayerType = {
  playerId?: number;
  name?: string;
  isBot?: boolean;
};

export type HandEntityTypes = keyof typeof FourPlayerLayers;
export type EntityTypes = 'table' | HandEntityTypes;
export type AnimatedCardType = 'close' | 'open';
export type CardMovementDirection = 'fromUser' | 'fromBot' | 'fromTable';

export type PlayerClickPosition = Record<string, number>;
