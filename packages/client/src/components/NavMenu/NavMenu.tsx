import React, { FC } from 'react';
import styled from 'styled-components';
import { StFlex, StNavLink } from 'styles/global';
import { AppRoute } from 'utils/constants';

const StNavMenu = styled(StFlex)`
  font-size: 20px;
  white-space: nowrap;
  gap: 30px;
`;

const NavMenu: FC = () => {
  const menu: { title: string; link: AppRoute }[] = [
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
    },
    {
      title: 'Форум',
      link: AppRoute.FORUM,
    },
    {
      title: 'Профиль',
      link: AppRoute.PROFILE,
    },
  ];
  return (
    <StNavMenu>
      {menu.map((item, index) => (
        <StNavLink key={`menu-item-${index}`} to={item.link}>
          {item.title}
        </StNavLink>
      ))}
    </StNavMenu>
  );
};

export default NavMenu;
