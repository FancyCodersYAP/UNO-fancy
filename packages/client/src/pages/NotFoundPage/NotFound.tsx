import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StTitle } from 'pages/LeaderBoardPage/style';
import { St404Wrapper } from './style';
import { drawCardFront } from 'game/utils';
import { cardColors } from 'game/utils';
import { StFlex } from 'styles/global';
import { css } from 'styled-components';

const marginBottom10px = css`
  margin-bottom: 20px;
`;

const fontStyles = css`
  font-size: 42px;
`;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        drawCardFront(context, 0, 0, cardColors[1], '4');
        drawCardFront(context, 90, 0, cardColors[0], '0');
        drawCardFront(context, 180, 0, cardColors[2], '4');
      }
    }
  }, []);

  return <canvas ref={canvasRef} height={120} width={260} />;
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <St404Wrapper>
      <StFlex css={marginBottom10px} alignItems="center" columnGap={20}>
        <StTitle css={fontStyles}>Ошибка</StTitle>
        <Canvas />
      </StFlex>

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
