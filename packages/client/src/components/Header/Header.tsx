import React, { FC } from 'react';

const Logo: FC<{ size?: number }> = ({ size = 60 }) => {
  return (
    <div
      style={{
        height: size,
      }}>
      <img
        style={{ height: '100%', transform: 'rotate(340deg)' }}
        src="src/assets/img/logo.png"
      />
    </div>
  );
};

const Header: FC = () => {
  return (
    <div
      style={{
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        padding: 20,
      }}>
      <Logo />
      <div>Меню</div>
    </div>
  );
};

export default Header;
