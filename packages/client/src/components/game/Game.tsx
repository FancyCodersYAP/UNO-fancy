import { useEffect, useRef } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './utils/constants';
import { controller } from './core/controller';

export const GameComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    controller.initGame(context);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    controller.move({ x: event.clientX, y: event.clientY });
  };

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      onClick={handleClick}></canvas>
  );
};
