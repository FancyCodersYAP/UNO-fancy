import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import {
  StEndGame,
  StEndGameWrapper,
  StEndGameTitle,
  StEndGameButtons,
} from './style';

const EndGame = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  const navigateToGame = () => {
    navigate(AppRoute.GAME);
  };

  return (
    <StEndGame>
      <StEndGameWrapper>
        <StEndGameTitle>Игра завершена</StEndGameTitle>
        <StEndGameButtons>
          <Button onClick={navigateToMain} text="Главное меню" primary />
          <Button onClick={navigateToGame} text="Сыграть снова" primary />
        </StEndGameButtons>
      </StEndGameWrapper>
    </StEndGame>
  );
};

export default EndGame;
