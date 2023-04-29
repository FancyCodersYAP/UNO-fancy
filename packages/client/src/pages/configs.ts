import { ValidationType } from 'utils/constants';
import { FormConfigType } from 'types';

export const profileConfig: FormConfigType[] = [
  {
    name: 'login',
    label: 'Логин',
    pattern: ValidationType.Login,
    required: true,
    type: 'text',
  },
  {
    name: 'first_name',
    label: 'Имя',
    pattern: ValidationType.Name,
    required: true,
    type: 'text',
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    pattern: ValidationType.Name,
    required: true,
    type: 'text',
  },
  {
    name: 'display_name',
    label: 'Имя в чате',
    pattern: ValidationType.Name,
    required: true,
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    pattern: ValidationType.Email,
    required: true,
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Телефон',
    pattern: ValidationType.Phone,
    required: true,
    type: 'tel',
  },
];

export const passwordConfig: FormConfigType[] = [
  {
    name: 'oldPassword',
    label: 'Старый пароль',
    pattern: ValidationType.Password,
    required: true,
    type: 'password',
  },
  {
    name: 'newPassword',
    label: 'Новый пароль',
    pattern: ValidationType.Password,
    required: true,
    type: 'password',
  },
  {
    name: 'repeatNewPassword',
    label: 'Повторите новый пароль',
    pattern: ValidationType.Password,
    required: true,
    type: 'password',
  },
];

export const loginConfig: FormConfigType[] = [
  {
    name: 'login',
    label: 'Логин',
    pattern: ValidationType.Login,
    required: true,
    type: 'text',
  },
  {
    name: 'password',
    label: 'Пароль',
    pattern: ValidationType.Password,
    required: true,
    type: 'password',
  },
];

export const registrationConfig: FormConfigType[] = [
  {
    name: 'login',
    label: 'Логин',
    pattern: ValidationType.Login,
    required: true,
    type: 'text',
  },
  {
    name: 'first_name',
    label: 'Имя',
    pattern: ValidationType.Name,
    required: true,
    type: 'text',
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    pattern: ValidationType.Name,
    required: true,
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    pattern: ValidationType.Email,
    required: true,
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Телефон',
    pattern: ValidationType.Phone,
    required: true,
    type: 'tel',
  },
  {
    name: 'password',
    label: 'Пароль',
    pattern: ValidationType.Password,
    required: true,
    type: 'password',
  },
];

export const addTopicConfig: FormConfigType[] = [
  {
    name: 'name',
    label: 'Название темы',
    pattern: ValidationType.TopicName,
    required: true,
    type: 'text',
    placeholder: 'Название темы',
  },
  {
    name: 'description',
    label: 'Описание темы',
    pattern: ValidationType.ToopicMessage,
    required: true,
    type: 'text',
    placeholder: 'Описание темы',
    textarea: true,
  },
];
