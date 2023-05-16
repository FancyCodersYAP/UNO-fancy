import {} from 'styled-components/cssprop';

declare global {
  interface Window {
    __PRELOADED_STATE__?: Record<string, Record<string, unknown>>;
    webkitAudioContext: typeof AudioContext;
  }

  interface CanvasRenderingContext2D {
    roundRect: (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number | number[]
    ) => void;
  }
}

export {};
