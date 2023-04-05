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
