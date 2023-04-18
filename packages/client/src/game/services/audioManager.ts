import { useState } from 'react';
import { SoundList } from 'game/utils';
import { SoundNameType, AudioListType } from 'game/types';

export const audioManager = () => {
  const [audioList, setAudioList] = useState<AudioListType>({});
  const [audioMute, setAudioMute] = useState<boolean>(false);
  const [audioPaused, setAudioPaused] = useState<boolean>(false);

  const play = (audio: HTMLAudioElement) => {
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
    });

    if (SoundList[name].loop) {
      audio.addEventListener('ended', () => {
        play(audio);
      });
    }
  };

  const playSound = (name: SoundNameType) => {
    if (Object.keys(audioList).length === 0) return;

    if (!audioList[name]) return;

    play(audioList[name]);
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
      play(audioList['background']);
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
    for (const audio in audioList) {
      audioList[audio].pause();
    }

    const list = {};
    setAudioList({ ...list });
  };

  return {
    audioList,
    audioMute,
    audioPaused,
    addSound,
    playSound,
    switchSoundMode,
    toggleAudioPause,
    stopAudio,
  };
};
