import { useState } from 'react';
import { SoundList } from 'game/utils';
import { SoundNameType, AudioListType, AudioObjectType } from 'game/types';

export const audioManager = () => {
  const [audioList, setAudioList] = useState<AudioListType>({});
  const [audioMute, setAudioMute] = useState<boolean>(false);
  const [audioPaused, setAudioPaused] = useState<boolean>(false);

  const play = (audio: HTMLAudioElement) => {
    audio.play().catch((e: Error) => {
      console.error(e.message);
    });
  };

  const changeVolume = (mute: boolean) => {
    for (const audio in audioList) {
      audioList[audio].audio.muted = mute;
    }
  };

  const addSound = (name: SoundNameType) => {
    const src = SoundList[name].src;

    const audio = new Audio(src);
    audio.muted = audioMute;
    audio.volume = SoundList[name].volume;
    audio.loop = SoundList[name].loop;

    audio.addEventListener('loadeddata', () => {
      const list = audioList;
      list[name] = {} as AudioObjectType;
      list[name].audio = audio;
      list[name].isPlaying = false;
      setAudioList(list);
    });
  };

  const playSound = (name: SoundNameType) => {
    if (
      !Object.keys(audioList).length ||
      !audioList[name] ||
      audioPaused ||
      audioList[name].isPlaying
    ) {
      return;
    }

    play(audioList[name].audio);
    audioList[name].isPlaying = true;

    audioList[name].audio.onended = () => {
      if (SoundList[name].loop) return;

      audioList[name].isPlaying = false;
    };
  };

  const toggleAudioPause = () => {
    if (audioMute) return;

    if (audioPaused) {
      setAudioPaused(false);
      play(audioList['background'].audio);
      changeVolume(false);
    } else {
      setAudioPaused(true);
      audioList['background'].audio.pause();
      changeVolume(true);
    }
  };

  const switchSoundMode = () => {
    setAudioMute(!audioMute);

    changeVolume(!audioMute);
  };

  const stopAudio = () => {
    for (const audio in audioList) {
      if (audioList[audio].isPlaying) {
        audioList[audio].audio.pause();
        audioList[audio].audio.currentTime = 0;
        audioList[audio].isPlaying = false;
      }
    }

    const list = {};
    setAudioList({ ...list });
  };

  const playFinish = () => {
    for (const audio in audioList) {
      if (audioList[audio].isPlaying) {
        audioList[audio].audio.pause();
        audioList[audio].audio.currentTime = 0;
        audioList[audio].isPlaying = false;
      }
    }

    play(audioList['finish'].audio);
    audioList['finish'].isPlaying = true;
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
    playFinish,
  };
};
