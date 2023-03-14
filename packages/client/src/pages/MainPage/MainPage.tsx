import { FC } from 'react';
import Button from 'components/Button';
import { StFlexColumnDirection } from 'styles/global';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';

const StImageBox = styled.div`
  height: 350px;
  opacity: 0.5;
  && img {
    height: 100%;
  }
`;

const MainPage: FC = () => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate(AppRoute.GAME);
  };
  return (
    <>
      <StFlexColumnDirection gap={40}>
        <StImageBox>
          <img src="src/assets/img/logo.png" alt="logo" />
        </StImageBox>
        <Button text="Начать игру" size="large" onClick={handlePlay} />
        <Button text="Правила" disignType="alternate" />
      </StFlexColumnDirection>
    </>
  );
};
export default MainPage;
