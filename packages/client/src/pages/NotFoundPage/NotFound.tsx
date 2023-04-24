import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StTitle } from 'pages/LeaderBoardPage/style';
import { St404Wrapper } from './style';
import { drawCardFront } from 'game/utils';
import { cardColors } from 'game/utils';
import { css } from 'styled-components';

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
        drawCardFront(context, 0, 0, cardColors[1], '4', true);
        drawCardFront(context, 60, 20, cardColors[0], '0', true);
        drawCardFront(context, 120, 0, cardColors[2], '4', true);
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={200} height={140} />;
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
      <p>Такой страницы нет</p>
      <Button
        onClick={navigateToMain}
        text="На главную"
        disignType="alternate"
      />
    </St404Wrapper>
  );
};

export default NotFoundPage;
