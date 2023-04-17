import { useState } from 'react';
import { SoundList } from 'game/utils';
import { SoundNameType, AudioListType } from 'game/types';

export const audioManager = () => {
  const [audioList, setAudioList] = useState<AudioListType>({});
  const [audioMute, setAudioMute] = useState<boolean>(false);
  const [audioPaused, setAudioPaused] = useState<boolean>(false);

  const playSound = (audio: HTMLAudioElement) => {
    audio.play().catch((e: Error) => {
      console.error(e.message);
    });
  };

  const addSound = (name: SoundNameType) => {
    const src = SoundList[name].src;

    const audio = new Audio(src);
    audio.muted = audioMute;
    audio.volume = SoundList[name].volume;

    audio.addEventListener('loadeddata', () => {
      const list = audioList;
      list[name] = audio;
      setAudioList(list);

      if (SoundList[name].autoplay) {
        playSound(audio);
      }
    });

    if (SoundList[name].loop) {
      audio.addEventListener('ended', () => {
        playSound(audio);
      });
    }
  };

  const onPlay = (name: SoundNameType) => {
    if (Object.keys(audioList).length === 0) return;

    if (!audioList[name]) return;

    playSound(audioList[name]);
  };

  /* Оставила закомментироованный вариант */
  /* если по клику на иконку паузы будем только ставить на паузу */
  /*const onPause = () => {
    if (audioPaused) return;

    setAudioPaused(true);

    audioList['background'].pause();
  };*/

  /* Оставила вариант со снятием с паузы по щелчу на ту же иконку
  /* Возможно стоит выводить модалку при включении паузы */
  const toggleAudioPause = () => {
    if (audioPaused) {
      setAudioPaused(false);
      playSound(audioList['background']);
    } else {
      setAudioPaused(true);
      audioList['background'].pause();
    }
  };

  const switchSoundMode = () => {
    setAudioMute(!audioMute);

    for (const audio in audioList) {
      audioList[audio].muted = !audioMute;
    }
  };

  const stopAudio = () => {
    audioList['background'].pause();
    const list: AudioListType = {};
    setAudioList(list);
  };

  return {
    audioList,
    audioMute,
    audioPaused,
    addSound,
    onPlay,
    switchSoundMode,
    toggleAudioPause,
    stopAudio,
  };
};
