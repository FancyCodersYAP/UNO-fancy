import React, { FC } from 'react';
import styled from 'styled-components';
import Toggler from 'components/Toggler';
import Logo from 'components/Logo';
import { StFlexAlighItemCenter } from 'styles/global';
import { AppRoute } from 'utils/constants';
import NavMenu from '../NavMenu';

const StHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  padding: 20px;
`;

const Header: FC = () => (
  <StHeader>
    <Logo />
    <StFlexAlighItemCenter columnGap={20}>
      <NavMenu />
      <Toggler />
    </StFlexAlighItemCenter>
  </StHeader>
);

export default Header;
