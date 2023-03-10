import { ValidationType } from 'utils/constants';
import { FormConfigType } from 'types';

export const profileConfig: FormConfigType[] = [
  {
    name: 'login',
    label: 'Логин',
    pattern: ValidationType.Login,
    required: true,
  },
  {
    name: 'first_name',
    label: 'Имя',
    pattern: ValidationType.Name,
    required: true,
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    pattern: ValidationType.Name,
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    pattern: ValidationType.Email,
    required: true,
  },
  {
    name: 'phone',
    label: 'Телефон',
    pattern: ValidationType.Phone,
    required: true,
  }
];
