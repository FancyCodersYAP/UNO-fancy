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

  const muteAudio = (mute: boolean) => {
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
      muteAudio(false);
    } else {
      setAudioPaused(true);
      audioList['background'].audio.pause();
      muteAudio(true);
    }
  };

  const switchSoundMode = () => {
    setAudioMute(!audioMute);

    muteAudio(!audioMute);
  };

  const stopAudio = () => {
    for (const audio in audioList) {
      if (audioList[audio].isPlaying) {
        audioList[audio].audio.pause();
        audioList[audio].audio.currentTime = 0;
        audioList[audio].isPlaying = false;
      }
    }

    setAudioList({});
  };

  const playFinish = () => {
    for (const audio in audioList) {
      if (audioList[audio].isPlaying) {
        audioList[audio].audio.pause();
        audioList[audio].audio.currentTime = 0;
        audioList[audio].isPlaying = false;
      }
    }

    if (audioList['finish']) {
      play(audioList['finish'].audio);
      audioList['finish'].isPlaying = true;
    }
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
