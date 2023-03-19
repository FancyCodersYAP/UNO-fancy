import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button/Button';
import { StLink, StFlexSpaceBetween } from 'styles/global';
import Card from 'components/Card/Card';

const cards = [
  {
    src: 'src/assets/img/start-game-1.jpg',
    alt: 'Карточка правил',
    text: 'Избавляйтесь от карт одного цвета в первую очередь',
  },
  {
    src: 'src/assets/img/start-game-2.jpg',
    alt: 'Карточка правил',
    text: 'Следите за ходами противника',
  },
  {
    src: 'src/assets/img/start-game-3.jpg',
    alt: 'Карточка правил',
    text: 'Используйте карты действий в более подходящий момент',
  },
];

const Rules = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate(AppRoute.GAME);
  };

  return (
    <>
      <StFlexSpaceBetween>
        {cards.map((card, id) => (
          <Card
            key={`card-${id}`}
            src={card.src}
            alt={card.alt}
            text={card.text}
          />
        ))}
      </StFlexSpaceBetween>

      <StFlexSpaceBetween>
        <StLink
          to="https://inteltoys.ru/articles/cat7/article655.html"
          target="_blank">
          Подробнее о правилах
        </StLink>
        <Button onClick={navigateToGame} text="Начать" />
      </StFlexSpaceBetween>
    </>
  );
};

export default Rules;
