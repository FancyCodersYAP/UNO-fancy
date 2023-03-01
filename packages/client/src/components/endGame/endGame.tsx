// Для проверки все что связано с роутингом закомментировано
// тк сейчас роутинг не подключен
//import { useNavigate } from 'react-router-dom';
//import { AppRoute } from '../../consts';
import { StEndGame, StEndGameWrapper, StEndGameTitle, StEndGameButtons, StEndGameButton } from './style';

const EndGame = () => {
  //const navigate = useNavigate()

  const navigateToMain = () => {
    //navigate(AppRoute.MAIN)
  }

  const navigateToGame = () => {
    //navigate(AppRoute.GAME)
  }

  return (
    <StEndGame>
      <StEndGameWrapper>
        <StEndGameTitle>Игра завершена</StEndGameTitle>
        <StEndGameButtons>
          <StEndGameButton onClick={navigateToMain}>Главное меню</StEndGameButton>
          <StEndGameButton onClick={navigateToGame}>Сыграть снова</StEndGameButton>
        </StEndGameButtons>
      </StEndGameWrapper>
    </StEndGame>
  )
}

export default EndGame;