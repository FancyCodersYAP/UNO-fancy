import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { St404Wrapper, St404Text, StTitle404 } from './style';
import { drawCardFront } from 'game/utils';
import { cardColors } from 'game/utils';
import {
  NOT_FOUND_PAGE_WIDTH_CARD,
  NOT_FOUND_PAGE_HEIGHT_CARD,
} from 'game/utils/constants';
import { TITLES, useTitle } from 'utils/useTitle';

const CanvasErorr404 = () => {
  useTitle(TITLES.notfound);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        drawCardFront(
          context,
          0,
          0,
          cardColors[1],
          '4',
          NOT_FOUND_PAGE_WIDTH_CARD,
          NOT_FOUND_PAGE_HEIGHT_CARD
        );
        drawCardFront(
          context,
          90,
          35,
          cardColors[0],
          '0',
          NOT_FOUND_PAGE_WIDTH_CARD,
          NOT_FOUND_PAGE_HEIGHT_CARD
        );
        drawCardFront(
          context,
          180,
          0,
          cardColors[2],
          '4',
          NOT_FOUND_PAGE_WIDTH_CARD,
          NOT_FOUND_PAGE_HEIGHT_CARD
        );
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={310} height={230} />;
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <St404Wrapper>
      <StTitle404>Ошибка</StTitle404>
      <CanvasErorr404 />
      <St404Text>Такой страницы нет</St404Text>
      <Button
        onClick={navigateToMain}
        text="На главную"
        disignType="alternate"
      />
    </St404Wrapper>
  );
};

export default NotFoundPage;
