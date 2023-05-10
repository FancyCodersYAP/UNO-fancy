import { FourPlayerLayers } from './utils';
import { cardColors, cardBackColor } from './utils';

export enum GameEvents {
  CARD_MOVEMENT = 'card movement',
  CLICK_UNO = 'click uno',
  SKIP_CLICK_UNO = 'skip click uno',
  FINISH_GAME = 'finish',
}

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
  isBot?: boolean;
  username?: string;
  score?: number;
  wins_2?: number;
  wins_4?: number;
  total_wins?: number;
};

export type ResultData = {
  score: number;
  wins_2: number;
  wins_4: number;
  total_wins: number;
};

export type HandEntityTypes = keyof typeof FourPlayerLayers;
export type EntityTypes = 'table' | HandEntityTypes;
export type AnimatedCardType = 'close' | 'open';
export type CardMovementDirection = 'fromUser' | 'fromBot' | 'fromTable';

export type PlayerClickPosition = Record<string, number>;

/* Audio types */
export const soundNames = [
  'background',
  'movement',
  'uno',
  'finish',
  'skipUno',
] as const;

export type SoundOptionsType = {
  src: string;
  volume: number;
  loop: boolean;
};
export type SoundNameType = typeof soundNames[number];
export type SoundListType = Record<SoundNameType, SoundOptionsType>;

export type AudioObjectType = {
  audio: HTMLAudioElement;
  isPlaying: boolean;
};
export type AudioListType = Record<string, AudioObjectType>;
