import React, { FC } from 'react';
import styled from 'styled-components';
import { StFlex, StLink } from 'styles/global';
import { AppRoute } from 'utils/constants';

const StNavMenu = styled(StFlex)`
  font-size: 20px;
  white-space: nowrap;
  gap: 20px;
`;

const NavMenu: FC = () => {
  const menu: { title: string; link: AppRoute }[] = [
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
        <StLink key={`menu-item-${index}`} to={item.link}>
          {item.title}
        </StLink>
      ))}
    </StNavMenu>
  );
};

export default NavMenu;
