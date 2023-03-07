import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import { StStartGame, StStartGameWrapper, StStartGameTitle, StStartGameImgs, StStartGameImgWrapper, StStartGameImg, StStartGameText, StStartGameButtons, StStartGameLink, StStartGameButton } from './style';

const StartGame = () => {
  const navigate = useNavigate()

  const navigateToGame = () => {
    navigate(AppRoute.GAME)
  }

  return (
    <StStartGame>
      <StStartGameWrapper>
        <StStartGameTitle>Правила игры:</StStartGameTitle>
        <StStartGameImgs>
          <StStartGameImgWrapper>
            <StStartGameImg src="src/assets/img/start-game-1.jpg" alt="Карточка правил" width="160px" height="160px" />
            <StStartGameText>Избавляйтесь от карт одного цвета в первую очередь</StStartGameText>
          </StStartGameImgWrapper>

          <StStartGameImgWrapper>
            <StStartGameImg src="src/assets/img/start-game-2.jpg" alt="Карточка правил" width="160px" height="160px" />
            <StStartGameText>Следите за ходами противника</StStartGameText>
          </StStartGameImgWrapper>

          <StStartGameImgWrapper>
            <StStartGameImg src="src/assets/img/start-game-3.jpg" alt="Карточка правил" width="160px" height="160px" />
            <StStartGameText>Используйте карты действий в более подходящий момент</StStartGameText>
          </StStartGameImgWrapper>
        </StStartGameImgs>

        <StStartGameButtons>
          <StStartGameLink href="https://inteltoys.ru/articles/cat7/article655.html" target="_blank">Подробнее о правилах</StStartGameLink>
          <StStartGameButton onClick={navigateToGame} primary>Начать</StStartGameButton>
        </StStartGameButtons>
      </StStartGameWrapper>
    </StStartGame>
  )
}

export default StartGame;