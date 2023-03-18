import React, { FC } from 'react';
import styled from 'styled-components';
import Toggler from 'components/Toggler';
import Logo from 'components/Logo';
import { StContainer, StFlexAlignItemCenter } from 'styles/global';
import NavMenu from '../NavMenu';

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  padding: 20px;
`;

const Header: FC = () => (
  <StHeader>
    <StContainer>
      <Logo />
      <StFlexAlignItemCenter gap={20}>
        <NavMenu />
        <Toggler />
      </StFlexAlignItemCenter>
    </StContainer>
  </StHeader>
);

export default Header;
