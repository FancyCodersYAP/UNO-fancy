import { SoundListType } from 'game/types';

export const SoundList: SoundListType = {
  background: {
    src: '/assets/sounds/music.mp3',
    volume: 0.3,
    loop: true,
  },
  movement: {
    src: '/assets/sounds/card-movement.mp3',
    volume: 1,
    loop: false,
  },
  uno: {
    src: '/assets/sounds/uno.mp3',
    volume: 0.6,
    loop: false,
  },
  skipUno: {
    src: '/assets/sounds/skip-uno.mp3',
    volume: 0.9,
    loop: false,
  },
  finish: {
    src: '/assets/sounds/finish.mp3',
    volume: 0.8,
    loop: false,
  },
};
