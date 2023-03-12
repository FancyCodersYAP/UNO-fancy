import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StFlexSpaceBetween } from 'styles/global';

const EndGame = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  const navigateToGame = () => {
    navigate(AppRoute.GAME);
  };

  return (
    <StFlexSpaceBetween columnGap={20}>
      <Button onClick={navigateToMain} text="Главное меню" primary />
      <Button onClick={navigateToGame} text="Сыграть снова" primary />
    </StFlexSpaceBetween>
  );
};

export default EndGame;
