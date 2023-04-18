declare global {
  interface Window {
    __PRELOADED_STATE__?: Record<string, Record<string, unknown>>;
    webkitAudioContext: typeof AudioContext;
  }

  export type Nullable<T> = T | null;

  export type TupleArray<T, len extends number> = [T, ...T[]] & { length: len };
}

export {};
