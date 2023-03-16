import { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

type LogoProps = {
  size?: number;
};

const StLogo = styled.div`
  height: ${(props: LogoProps) => `${props.size}px`};
  opacity: 0.5;
  && img {
    height: 100%;
  }
  cursor: pointer;
`;

const Logo: FC<LogoProps> = ({ size = 60 }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <StLogo size={size} onClick={handleClick}>
      <img src="src/assets/img/colorLogo.png" alt="logo" />
    </StLogo>
  );
};
export default Logo;
