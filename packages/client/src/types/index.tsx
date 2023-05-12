import { ValidationType } from 'utils/constants';

export interface FormConfigType {
  name: string;
  label: string;
  pattern: ValidationType;
  required: boolean;
  value?: string;
  type: string;
  placeholder?: string;
  textarea?: boolean;
}

export interface PlayerType {
  game_id: number;
  username: string;
  avatar?: string;
  score: number;
  wins_2: number;
  wins_4: number;
  total_wins: number;
}

export interface SvgIconProps {
  url: string;
  width: number;
  height: number;
  isLeft?: boolean;
}

export interface AvatarType {
  image?: string | null;
}

export interface UserType {
  avatar?: string;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
}
