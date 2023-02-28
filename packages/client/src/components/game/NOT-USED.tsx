import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;

const BASE_CARD_WIDTH = 150;
const BASE_CARD_HEIGHT = BASE_CARD_WIDTH * 1.5;

const start = 50;
const padding = BASE_CARD_HEIGHT / 29.5;


const Canvas: React.FC<CanvasProps> = ({...props}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        // Нижний (белый) слой карты
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(31, 29, 30, .3)'; 
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.roundRect(start, start, BASE_CARD_WIDTH, BASE_CARD_HEIGHT, [6]);
        ctx.fill();

        // Чёрный фон карты
        ctx.fillStyle = '#1F1D1E';
        ctx.beginPath();
        ctx.roundRect(start + padding, start + padding, BASE_CARD_WIDTH - padding * 2, BASE_CARD_HEIGHT - padding * 2, [10]);
        ctx.fill();

        // Эллипс
        const coords = [start + BASE_CARD_WIDTH / 2, start + BASE_CARD_HEIGHT / 2] // координаты центра эллипса — массив [x, y]
        const sizes = [BASE_CARD_HEIGHT / 1.15 / 2, BASE_CARD_HEIGHT / 2.18 / 2] // длины большой и малой полуосей эллипса — массив [a, b]
        const angle = Math.PI / 1.5 // вектор [x, y] наклона эллипса
        const ellipseBgd = '#EA4000';

        //ctx.fillStyle = '#EA4000';
        drawEllipse(ctx, coords, sizes, angle, ellipseBgd)
    }, []);

    return <canvas ref={canvasRef} width={props.width} height={props.height}/>
}

function drawEllipse(ctx: CanvasRenderingContext2D, coords: number[], sizes: number[], angle: number, bgd: string) {
    ctx.shadowColor = 'rgba(31, 29, 30, 0)'; 
    ctx.fillStyle = '#EA4000';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.save(); // сохраняем стейт контекста
    ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
    ctx.rotate(angle); // поворачиваем координатную сетку на нужный угол
    ctx.scale(1, sizes[1]/sizes[0] - 1); // сжимаем по вертикали
    ctx.arc(0, 0, sizes[0], 0, Math.PI*2); // рисуем круг
    ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
    ctx.strokeStyle = '#EA4000';
    ctx.stroke(); // обводим
    ctx.fill();
    ctx.closePath();
}

export default Canvas;

// ReactDOM.render(<Canvas />, document.getElementById('root')); 