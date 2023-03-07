import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button/Button';
import { StLink, StTextContainer } from 'styles/global';
import { StStartGame, StStartGameWrapper, StStartGameTitle, StStartGameImgs, StStartGameImgWrapper, StStartGameImg, StStartGameNavWrapper } from './style';

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
            <StStartGameImg src="src/assets/img/start-game-1.jpg" alt="Карточка правил" />
            <StTextContainer>Избавляйтесь от карт одного цвета в первую очередь</StTextContainer>
          </StStartGameImgWrapper>

          <StStartGameImgWrapper>
            <StStartGameImg src="src/assets/img/start-game-2.jpg" alt="Карточка правил" />
            <StTextContainer>Следите за ходами противника</StTextContainer>
          </StStartGameImgWrapper>

          <StStartGameImgWrapper>
            <StStartGameImg src="src/assets/img/start-game-3.jpg" alt="Карточка правил" />
            <StTextContainer>Используйте карты действий в более подходящий момент</StTextContainer>
          </StStartGameImgWrapper>
        </StStartGameImgs>

        <StStartGameNavWrapper>
          <StLink to="https://inteltoys.ru/articles/cat7/article655.html" target="_blank">Подробнее о правилах</StLink>
          <Button onClick={navigateToGame} text="Начать" primary />
        </StStartGameNavWrapper>
      </StStartGameWrapper>
    </StStartGame>
  )
}

export default StartGame;
