import { ValidationType } from 'utils/constants';

export interface FormConfigType {
  name: string;
  label: string;
  pattern: ValidationType;
  required: boolean;
  value?: string;
  type: string;
}

export interface PlayerType {
  id: string;
  name: string;
  avatar?: string;
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

export interface AvatarType {
  image?: string;
}

export interface UserType {
  avatar?: string;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
}
