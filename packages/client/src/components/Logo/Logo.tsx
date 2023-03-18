import { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

type LogoProps = {
  size?: number;
};

const StLogo = styled.div`
  width: 130px; // по идее тогда надо и здесь через пропсы делать
  height: ${(props: LogoProps) => `${props.size}px`};
  opacity: 0.7;
  background: url('src/assets/img/colorLogo.png');
  background-size: cover;
  mix-blend-mode: color-dodge; //darken color-burn

  cursor: pointer;
`;

const Logo: FC<LogoProps> = ({ size = 90 }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoute.MAIN);
  };

  return <StLogo size={size} onClick={handleClick} />;
};
export default Logo;
