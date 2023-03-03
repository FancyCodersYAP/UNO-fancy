import React, { FC } from 'react';
import { variables } from 'styles/variables';
import styled from 'styled-components';

const StLogo = styled.img`
  height: 100%;
  transform: rotate(340deg);
`;

const Logo: FC<{ size?: number }> = ({ size = 60 }) => {
  return (
    <div
      style={{
        height: size,
      }}>
      <StLogo src="src/assets/img/logo.png" />
    </div>
  );
};

const StHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${variables.textLightColor};
  padding: 20px;
`;

const Header: FC = () => {
  return (
    <StHeader>
      <Logo />
      <div>Меню</div>
    </StHeader>
  );
};

export default Header;
