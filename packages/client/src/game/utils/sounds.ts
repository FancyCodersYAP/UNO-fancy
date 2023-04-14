import { SoundListType } from 'game/types';

export const SoundList: SoundListType = {
  background: {
    src: '/assets/sounds/music.mp3',
    volume: 0.3,
    autoplay: true,
    loop: true,
  },
  movement: {
    src: '/assets/sounds/card-movement.mp3',
    volume: 1,
    autoplay: false,
    loop: false,
  },
};
