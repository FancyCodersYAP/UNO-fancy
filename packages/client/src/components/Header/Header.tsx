import { FC } from 'react';
import styled from 'styled-components';
import Toggler from 'components/Toggler';
import Logo from 'components/Logo';
import { StContainer, StFlex } from 'styles/global';
import NavMenu from '../NavMenu';

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
`;

const Header: FC = () => (
  <StHeader>
    <StContainer>
      <Logo />
      <StFlex alignItems="center" columnGap={20}>
        <NavMenu />
        <Toggler />
      </StFlex>
    </StContainer>
  </StHeader>
);

export default Header;
