import * as light from './colors-theme-light';
import * as dark from './colors-theme-dark';
import { ThemeType } from './types';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const THEMES: Record<Theme, ThemeType> = {
  [Theme.LIGHT]: light,
  [Theme.DARK]: dark,
};

//для цветов которые не будут меняться по теме
export const COLOR_ELEMENT_CONTRAST = '#fff';

export const COLOR_ELEMENT_MAIN = '#0E7A89FF';

export const COLOR_ICON_REGULAR = '#c6cedb';

export const COLOR_ELEMENT_ALTERNATE = '#d7dbdb';

export const BACKGROUND_ELEMENT_OPACITY = 'rgba(0, 0, 0, 0.5)';

export const BACKGROUND_COLOR_TABLE_PRIMARY = 'rgba(255, 255, 255, 0.8)';

export const BACKGROUND_COLOR_OPACITY_LIGHT = 'rgba(255, 255, 255, 0.16)';

export const BACKGROUND_COLOR_GAME_PRIMARY =
  'radial-gradient(#b0c9d7, #3a5d70)';

export const BORDER_COLOR_BUTTON = '#acb5bd';
