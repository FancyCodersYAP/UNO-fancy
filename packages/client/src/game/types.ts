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

/* Audio types */
export const soundNames = ['background', 'movement', 'uno', 'finish'] as const;

export type SoundOptionsType = {
  src: string;
  volume: number;
  loop: boolean;
};
export type SoundNameType = typeof soundNames[number];
export type SoundListType = Record<SoundNameType, SoundOptionsType>;

export type AudioListType = Record<string, HTMLAudioElement>;
