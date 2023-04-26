import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StTitle } from 'pages/LeaderBoardPage/style';
import { St404Wrapper, St404Text } from './style';
import { drawCardFront } from 'game/utils';
import { cardColors } from 'game/utils';
import { css } from 'styled-components';
import {
  NOT_FOUND_PAGE_WIDTH_CARD,
  NOT_FOUND_PAGE_HEIGHT_CARD,
} from 'game/utils/constants';

const titleStyles = css`
  font-size: 42px;
  margin-bottom: 20px;
`;

const CanvasErorr404 = () => {
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

  return <canvas ref={canvasRef} width={300} height={215} />;
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <St404Wrapper>
      <StTitle css={titleStyles}>Ошибка</StTitle>
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
