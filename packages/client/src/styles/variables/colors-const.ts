import * as light from './colors-theme-light';
import * as dark from './colors-theme-dark';
import { ThemeType } from './types';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
// export const THEMES: Record<string, any> = { light, dark };
export const THEMES: Record<Theme, ThemeType> = {
  [Theme.LIGHT]: light,
  [Theme.DARK]: dark,
};

//для цветов которые не будут меняться по теме
export const COLOR_ELEMENT_CONTRAST = '#fff';

export const COLOR_ELEMENT_MAIN = '#0E7A89FF';

export const COLOR_ICON_REGULAR = '#c6cedb';

export const COLOR_ELEMENT_ALTERNATE = '#d7dbdb';
