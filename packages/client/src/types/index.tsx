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
