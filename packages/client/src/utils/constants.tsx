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
  TopicName = 'topicName',
  ToopicDescription = 'topicDescription',
}

export const ValidationPattern = {
  login: {
    value: /^(?=.*[\D])[\w-]{3,20}$/g,
    message:
      '3-20 символов, допустимые символы: латин. буквы, цифры, дефис, подчеркивание _',
  },
  password: {
    value: /^(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z!@#-$%^_&*]{8,40}$/g,
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
  topicName: {
    value: /^(?=.*[\D\s])[\s_0-9A-ZА-ЯËa-zа-яё-]{3,50}$/g,
    message:
      '3-50 символов, допустимые символы: буквы, цифры, дефис, подчеркивание',
  },
  topicDescription: {
    value: /./gu,
    message: '',
  },
};

export const GAME_DESCRIPTION =
  'Uno – одна из главных карточных игр мира, которая в последние годы завоевывает Россию.\n' +
  'Игра становится интереснее за счет специальных карт.\n' +
  'Была разработана в 1971 году парикмахером Мерлом Роббинсом в городке Реддинг, штат Огайо, США.\n' +
  'В начале 90-х Uno выкупила другая компания, и игра перестала быть феноменом только США.\n' +
  'Время игры от 10 минут. Минимум 2 игрока.\n' +
  'Uno развивает эмоциональный интеллект и учит выбирать правильную стратегию. Сначала может показаться, что игра основана на везении, зависит от того, какие карты тебе выпадут. Но потом нащупываются стратегии, и целью игры становится не только избавление от карт, но и создание ситуации, когда соперник набирает охапку карт.';
