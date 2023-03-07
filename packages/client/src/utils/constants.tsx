export enum AppRoute {
  MAIN = `/`,
  LOGIN = `/login`,
  REGISTRATION = `/registration`,
  PROFILE = `/profile`,
  LEADERBOARD = `/leaderboard`,
  GAME = `/game`,
  FORUM = `/forum`,
  NOT_FOUND_PAGE = `*`,
}

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export enum ValidationType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  Phone = 'phone',
  Name = 'name',
}

export const ValidationPattern = {
  login: {
    value: /(?=.*[\D])[\w-]{3,20}$/g,
    message:
      '3-20 символов, латиница, может содержать цифры, без пробелов, допустимы дефис и нижнее подчёркивание',
  },
  password: {
    value: /(?=.*[A-Z])(?=.*[0-9]){8,40}/g,
    message: '8-40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    message: 'Невалидный email',
  },
  name: {
    value: /^[A-Z|А-Я|Ë][A-ZА-ЯËa-zа-яё-]+$/g,
    message:
      'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
  },
  phone: {
    value: /^[\d|+][\d]{10,15}$/i,
    message: '10-15 цифр, может начинаться с плюса',
  },
};
