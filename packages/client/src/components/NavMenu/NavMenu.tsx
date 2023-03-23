import React, { FC } from 'react';
import styled from 'styled-components';
import { StFlex, StNavLink } from 'styles/global';
import { AppRoute } from 'utils/constants';
import { authState } from '../../hooks/authState';

const StNavMenu = styled(StFlex)`
  font-size: 20px;
  white-space: nowrap;
  gap: 30px;
`;

const NavMenu: FC = () => {
  const { user } = authState();

  const menu: { title: string; link: AppRoute; auth?: boolean }[] = [
    {
      title: 'Главная страница',
      link: AppRoute.MAIN,
    },
    {
      title: 'Игра',
      link: AppRoute.GAME,
    },
    {
      title: 'Рейтинг игроков',
      link: AppRoute.LEADERBOARD,
      auth: true,
    },
    {
      title: 'Форум',
      link: AppRoute.FORUM,
      auth: true,
    },
    {
      title: 'Профиль',
      link: AppRoute.PROFILE,
      auth: true,
    },
    {
      title: 'Авторизация',
      link: AppRoute.LOGIN,
      auth: false,
    },
    {
      title: 'Регистрация',
      link: AppRoute.REGISTRATION,
      auth: false,
    },
  ];
  return (
    <StNavMenu>
      {menu
        .filter(item => {
          if (user) {
            return item.auth || item.auth === undefined;
          } else return !item.auth;
        })
        .map((item, index) => (
          <StNavLink key={`menu-item-${index}`} to={item.link}>
            {item.title}
          </StNavLink>
        ))}
    </StNavMenu>
  );
};

export default NavMenu;
