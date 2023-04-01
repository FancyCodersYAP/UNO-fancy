export type ThemeType = {
  COLOR_PREVIEW_PRIMARY: string;
  COLOR_ELEMENT_PRIMARY: string;
  COLOR_TEXT_PRIMARY: string;
  COLOR_ELEMENT_SECONDARY: string;
  COLOR_TEXT_SECONDARY: string;
  COLOR_ELEMENT_WARN: string;
  COLOR_BACKGROUND_SECONDARY: string;
  COLOR_ELEMENT_ALTERNATE: string;
  DARKEN?: string;
  name: string;
};

export type FlexProps = {
  backgroundColor?: string;
  borderRadius?: number;
  columnGap?: number;
  padding?: number;
  marginBottom?: number;
  rowGap?: number;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: 'column' | 'row';
};

export type TextContainerProps = {
  textAlign?: 'start' | 'end' | 'center';
  width?: number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
};

export type ModalProps = {
  width?: number;
  horizontalPaddings?: number;
  verticalPaddings?: number;
};

export type CarouselBoxProps = {
  width?: number;
  height?: number;
};
