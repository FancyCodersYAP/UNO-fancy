import { ValidationType } from 'utils/constants';

export interface FormConfigType {
  name: string;
  label: string;
  pattern: ValidationType;
  required: boolean;
}
