/* Audio types */
export const soundNames = ['background', 'movement'] as const;

export type SoundOptionsType = {
  src: string;
  volume: number;
  autoplay: boolean;
  loop: boolean;
};
export type SoundNameType = typeof soundNames[number];
export type SoundListType = Record<SoundNameType, SoundOptionsType>;

export type AudioListType = Record<string, HTMLAudioElement>;
