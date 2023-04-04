import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StLink, StFlex } from 'styles/global';
import Card from 'components/Card';

import { CARDS } from './constants';

const Rules = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate(AppRoute.GAME);
  };

  return (
    <>
      <StFlex justifyContent="space-between">
        {CARDS.map((card, id) => (
          <Card
            key={`card-${id}`}
            src={card.src}
            alt={card.alt}
            text={card.text}
          />
        ))}
      </StFlex>

      <StFlex justifyContent="space-between">
        <StLink
          to="https://inteltoys.ru/articles/cat7/article655.html"
          target="_blank">
          Подробнее о правилах
        </StLink>
        <Button onClick={navigateToGame} text="Начать" />
      </StFlex>
    </>
  );
};

export default Rules;
