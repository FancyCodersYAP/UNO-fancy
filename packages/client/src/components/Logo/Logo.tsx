import { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

type LogoProps = {
  size?: number;
  isColor?: boolean;
};

const StLogo = styled.div`
  height: ${(props: LogoProps) => props?.size}px;
  opacity: 0.5;
  && img {
    height: 100%;
  }
  cursor: pointer;
`;

const Logo: FC<LogoProps> = ({ size = 60, isColor }) => {
  const imgSrc = isColor
    ? 'src/assets/img/colorLogo.png'
    : 'src/assets/img/logo.png';
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <StLogo size={size} onClick={handleClick}>
      <img src={imgSrc} alt="logo" />
    </StLogo>
  );
};
export default Logo;
