import { FC } from 'react';
import Button from 'components/Button';
import { StFlexColumnDirection } from 'styles/global';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

const StMainLogo = styled.div`
  height: 450px;
  width: 800px;
  opacity: 0.8;
  background: url('src/assets/img/logo.png');
  background-size: cover;
  mix-blend-mode: multiply; //darken color-burn
  margin-top: -100px;
`;

const MainPage: FC = () => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate(AppRoute.GAME);
  };
  return (
    <>
      <StFlexColumnDirection gap={40}>
        <StMainLogo />
        <Button text="Начать игру" size="large" onClick={handlePlay} />
        <Button css={{ marginTop: 20 }} text="Правила" disignType="alternate" />
      </StFlexColumnDirection>
    </>
  );
};
export default MainPage;
