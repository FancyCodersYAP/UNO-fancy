import React, { CSSProperties, FC } from 'react';
import { variables } from 'styles/variables';

const logoStyle: CSSProperties = {
  height: '100%',
  transform: 'rotate(340deg)',
};

const Logo: FC<{ size?: number }> = ({ size = 60 }) => {
  return (
    <div
      style={{
        height: size,
      }}>
      <img style={logoStyle} src="src/assets/img/logo.png" />
    </div>
  );
};

const headerStyle: CSSProperties = {
  height: 80,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: variables.textLightColor,
  padding: 20,
};

const Header: FC = () => {
  return (
    <div style={headerStyle}>
      <Logo />
      <div>Меню</div>
    </div>
  );
};

export default Header;
