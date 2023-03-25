import { ValidationType } from 'utils/constants';

export interface FormConfigType {
  name: string;
  label: string;
  pattern: ValidationType;
  required: boolean;
}

export interface PlayerType {
  id: string;
  name: string;
  avatar: string;
  score: number;
  time: string;
}

export interface FlexProps {
  backgroundColor?: string;
  borderRadius?: number;
  columnGap?: number;
  padding?: number;
  marginBottom?: number;
  rowGap?: number;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: 'column' | 'row';
}

export interface TextContainerProps {
  textAlign?: 'start' | 'end' | 'center';
  width?: number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
}

export interface CarouselBoxProps {
  width?: number;
  height?: number;
}

export interface SvgIconProps {
  url: string;
  width: number;
  height: number;
  isLeft?: boolean;
}
