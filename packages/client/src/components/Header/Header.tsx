import React, { FC } from 'react';
import styled from 'styled-components';
import * as COLORS from 'styles/variables/colors-theme-light';
import Toggler from '../Toggler';

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
  color: ${COLORS.MAIN_TEXT_COLOR};
  padding: 20px;
`;

type HeaderProp = {
  themeChange: () => void;
};
const Header: FC<HeaderProp> = (
  { themeChange, ...rest } //todo поменять div на StMenu
) => (
  <StHeader>
    <Logo />
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      Меню <Toggler onChange={themeChange} {...rest} />
    </div>
  </StHeader>
);

export default Header;
