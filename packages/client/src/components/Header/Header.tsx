import React, { FC } from 'react';
import styled from 'styled-components';
import Toggler from 'components/Toggler';
import Logo from 'components/Logo';
import { StFlexAlighItemCenter, StLink } from 'styles/global';
import { AppRoute } from 'utils/constants';

const StHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  padding: 20px;
  white-space: nowrap;
`;

//todo в Header поменять div на StMenu
const Header: FC = () => {
  const menu: { title: string; link: string }[] = [
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
    <StHeader>
      <Logo isColor />
      <StFlexAlighItemCenter gap={20}>
        {menu.map(item => (
          <StLink to={item.link}>{item.title}</StLink>
        ))}
        <Toggler />
      </StFlexAlighItemCenter>
    </StHeader>
  );
};

export default Header;
