import {} from 'styled-components/cssprop';

declare global {
  interface Window {
    __PRELOADED_STATE__?: Record<string, Record<string, unknown>>;
    webkitAudioContext: typeof AudioContext;
  }
}

export {};
