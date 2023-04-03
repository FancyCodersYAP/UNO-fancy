import { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

type LogoProps = {
  size?: number;
};

const StLogo = styled.div`
  padding: 46px 65.5px; //проблемное место можно оставить так, но с масштабированием надо учитывать пропорции
  opacity: 0.7;
  background: url('src/assets/img/colorLogo.png');
  background-size: cover;
  mix-blend-mode: color-dodge; //darken color-burn

  cursor: pointer;
`;

const Logo: FC<LogoProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoute.MAIN);
  };

  return <StLogo onClick={handleClick} />;
};
export default Logo;
