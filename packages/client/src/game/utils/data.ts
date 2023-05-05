import { CardType } from 'game/types';

export const namesForBots = ['Max', 'Helena', 'Alex'];

export const cardBackColor = '#1F1D1E';

export const cardColors = ['#009F66', '#008DD4', '#F7CC00', '#EA4000'] as const;

export enum FourPlayerLayers {
  'frontHand',
  'leftHand',
  'topHand',
  'rightHand',
}

export enum TwoPlayerLayers {
  'frontHand',
  'topHand',
}

export const allCards: CardType[] = [
  {
    id: 1,
    sign: '0',
    color: cardColors[0],
  },
  {
    id: 2,
    sign: '1',
    color: cardColors[0],
  },
  {
    id: 3,
    sign: '1',
    color: cardColors[0],
  },
  {
    id: 4,
    sign: '2',
    color: cardColors[0],
  },
  {
    id: 5,
    sign: '2',
    color: cardColors[0],
  },
  {
    id: 6,
    sign: '3',
    color: cardColors[0],
  },
  {
    id: 7,
    sign: '3',
    color: cardColors[0],
  },
  {
    id: 8,
    sign: '4',
    color: cardColors[0],
  },
  {
    id: 9,
    sign: '4',
    color: cardColors[0],
  },
  {
    id: 10,
    sign: '5',
    color: cardColors[0],
  },
  {
    id: 11,
    sign: '5',
    color: cardColors[0],
  },
  {
    id: 12,
    sign: '6',
    color: cardColors[0],
  },
  {
    id: 13,
    sign: '6',
    color: cardColors[0],
  },
  {
    id: 14,
    sign: '7',
    color: cardColors[0],
  },
  {
    id: 15,
    sign: '7',
    color: cardColors[0],
  },
  {
    id: 16,
    sign: '8',
    color: cardColors[0],
  },
  {
    id: 17,
    sign: '8',
    color: cardColors[0],
  },
  {
    id: 18,
    sign: '9',
    color: cardColors[0],
  },
  {
    id: 19,
    sign: '9',
    color: cardColors[0],
  },
  {
    id: 20,
    sign: '∅',
    color: cardColors[0],
    action: 'skip',
  },
  {
    id: 21,
    sign: '∅',
    color: cardColors[0],
    action: 'skip',
  },
  {
    id: 22,
    sign: '↻',
    color: cardColors[0],
    action: 'reverse',
  },
  {
    id: 23,
    sign: '↻',
    color: cardColors[0],
    action: 'reverse',
  },
  {
    id: 24,
    sign: '+2',
    color: cardColors[0],
    action: 'draw two',
  },
  {
    id: 25,
    sign: '+2',
    color: cardColors[0],
    action: 'draw two',
  },
  {
    id: 26,
    sign: '0',
    color: cardColors[1],
  },
  {
    id: 27,
    sign: '1',
    color: cardColors[1],
  },
  {
    id: 28,
    sign: '1',
    color: cardColors[1],
  },
  {
    id: 29,
    sign: '2',
    color: cardColors[1],
  },
  {
    id: 30,
    sign: '2',
    color: cardColors[1],
  },
  {
    id: 31,
    sign: '3',
    color: cardColors[1],
  },
  {
    id: 32,
    sign: '3',
    color: cardColors[1],
  },
  {
    id: 33,
    sign: '4',
    color: cardColors[1],
  },
  {
    id: 34,
    sign: '4',
    color: cardColors[1],
  },
  {
    id: 35,
    sign: '5',
    color: cardColors[1],
  },
  {
    id: 36,
    sign: '5',
    color: cardColors[1],
  },
  {
    id: 37,
    sign: '6',
    color: cardColors[1],
  },
  {
    id: 38,
    sign: '6',
    color: cardColors[1],
  },
  {
    id: 39,
    sign: '7',
    color: cardColors[1],
  },
  {
    id: 40,
    sign: '7',
    color: cardColors[1],
  },
  {
    id: 41,
    sign: '8',
    color: cardColors[1],
  },
  {
    id: 42,
    sign: '8',
    color: cardColors[1],
  },
  {
    id: 43,
    sign: '9',
    color: cardColors[1],
  },
  {
    id: 44,
    sign: '9',
    color: cardColors[1],
  },
  {
    id: 45,
    sign: '∅',
    color: cardColors[1],
    action: 'skip',
  },
  {
    id: 46,
    sign: '∅',
    color: cardColors[1],
    action: 'skip',
  },
  {
    id: 47,
    sign: '↻',
    color: cardColors[1],
    action: 'reverse',
  },
  {
    id: 48,
    sign: '↻',
    color: cardColors[1],
    action: 'reverse',
  },
  {
    id: 49,
    sign: '+2',
    color: cardColors[1],
    action: 'draw two',
  },
  {
    id: 50,
    sign: '+2',
    color: cardColors[1],
    action: 'draw two',
  },
  {
    id: 51,
    sign: '0',
    color: cardColors[2],
  },
  {
    id: 52,
    sign: '1',
    color: cardColors[2],
  },
  {
    id: 53,
    sign: '1',
    color: cardColors[2],
  },
  {
    id: 54,
    sign: '2',
    color: cardColors[2],
  },
  {
    id: 55,
    sign: '2',
    color: cardColors[2],
  },
  {
    id: 56,
    sign: '3',
    color: cardColors[2],
  },
  {
    id: 57,
    sign: '3',
    color: cardColors[2],
  },
  {
    id: 58,
    sign: '4',
    color: cardColors[2],
  },
  {
    id: 59,
    sign: '4',
    color: cardColors[2],
  },
  {
    id: 60,
    sign: '5',
    color: cardColors[2],
  },
  {
    id: 61,
    sign: '5',
    color: cardColors[2],
  },
  {
    id: 62,
    sign: '6',
    color: cardColors[2],
  },
  {
    id: 63,
    sign: '6',
    color: cardColors[2],
  },
  {
    id: 64,
    sign: '7',
    color: cardColors[2],
  },
  {
    id: 65,
    sign: '7',
    color: cardColors[2],
  },
  {
    id: 66,
    sign: '8',
    color: cardColors[2],
  },
  {
    id: 67,
    sign: '8',
    color: cardColors[2],
  },
  {
    id: 68,
    sign: '9',
    color: cardColors[2],
  },
  {
    id: 69,
    sign: '9',
    color: cardColors[2],
  },
  {
    id: 70,
    sign: '∅',
    color: cardColors[2],
    action: 'skip',
  },
  {
    id: 71,
    sign: '∅',
    color: cardColors[2],
    action: 'skip',
  },
  {
    id: 72,
    sign: '↻',
    color: cardColors[2],
    action: 'reverse',
  },
  {
    id: 73,
    sign: '↻',
    color: cardColors[2],
    action: 'reverse',
  },
  {
    id: 74,
    sign: '+2',
    color: cardColors[2],
    action: 'draw two',
  },
  {
    id: 75,
    sign: '+2',
    color: cardColors[2],
    action: 'draw two',
  },
  {
    id: 76,
    sign: '0',
    color: cardColors[3],
  },
  {
    id: 77,
    sign: '1',
    color: cardColors[3],
  },
  {
    id: 78,
    sign: '1',
    color: cardColors[3],
  },
  {
    id: 79,
    sign: '2',
    color: cardColors[3],
  },
  {
    id: 80,
    sign: '2',
    color: cardColors[3],
  },
  {
    id: 81,
    sign: '3',
    color: cardColors[3],
  },
  {
    id: 82,
    sign: '3',
    color: cardColors[3],
  },
  {
    id: 83,
    sign: '4',
    color: cardColors[3],
  },
  {
    id: 84,
    sign: '4',
    color: cardColors[3],
  },
  {
    id: 85,
    sign: '5',
    color: cardColors[3],
  },
  {
    id: 86,
    sign: '5',
    color: cardColors[3],
  },
  {
    id: 87,
    sign: '6',
    color: cardColors[3],
  },
  {
    id: 88,
    sign: '6',
    color: cardColors[3],
  },
  {
    id: 89,
    sign: '7',
    color: cardColors[3],
  },
  {
    id: 90,
    sign: '7',
    color: cardColors[3],
  },
  {
    id: 91,
    sign: '8',
    color: cardColors[3],
  },
  {
    id: 92,
    sign: '8',
    color: cardColors[3],
  },
  {
    id: 93,
    sign: '9',
    color: cardColors[3],
  },
  {
    id: 94,
    sign: '9',
    color: cardColors[3],
  },
  {
    id: 95,
    sign: '∅',
    color: cardColors[3],
    action: 'skip',
  },
  {
    id: 96,
    sign: '∅',
    color: cardColors[3],
    action: 'skip',
  },
  {
    id: 97,
    sign: '↻',
    color: cardColors[3],
    action: 'reverse',
  },
  {
    id: 98,
    sign: '↻',
    color: cardColors[3],
    action: 'reverse',
  },
  {
    id: 99,
    sign: '+2',
    color: cardColors[3],
    action: 'draw two',
  },
  {
    id: 100,
    sign: '+2',
    color: cardColors[3],
    action: 'draw two',
  },
  {
    id: 101,
    sign: '⊕',
    color: cardBackColor,
    action: 'wild',
  },
  {
    id: 102,
    sign: '⊕',
    color: cardBackColor,
    action: 'wild',
  },
  {
    id: 103,
    sign: '⊕',
    color: cardBackColor,
    action: 'wild',
  },
  {
    id: 104,
    sign: '⊕',
    color: cardBackColor,
    action: 'wild',
  },
  {
    id: 105,
    sign: '+4',
    color: cardBackColor,
    action: 'wild draw four',
  },
  {
    id: 106,
    sign: '+4',
    color: cardBackColor,
    action: 'wild draw four',
  },
  {
    id: 107,
    sign: '+4',
    color: cardBackColor,
    action: 'wild draw four',
  },
  {
    id: 108,
    sign: '+4',
    color: cardBackColor,
    action: 'wild draw four',
  },
];
