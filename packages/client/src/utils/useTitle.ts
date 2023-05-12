import { useEffect } from 'react';

export const useTitle = (title: TITLES | string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
};

export enum TITLES {
  main = 'Главная страница',
  forum = 'Форум',
  game = 'Игра UNO',
  leaderboard = 'Рейтинг игроков',
  login = 'Вход',
  registration = 'Регистрация',
  notfound = 'Ошибка 404',
  profile = 'Профиль',
  editProfile = 'Изменение данных',
  password = 'Изменение пароля',
}
