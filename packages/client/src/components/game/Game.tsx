import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from './utils/hooks';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './utils/constants';
import {
    start, game, selectCurrentPlayer, selectPlayerId,selectPlayers
} from '../../store/features/gameSlice';
import { PlayerType } from './types';
import { controller } from './core/Controller';


export const GameComponent = () => {
    const dispatch = useDispatch();

    const playerId = useSelector(selectPlayerId);
    const players = useSelector(selectPlayers);
    const currentPlayer = useSelector(selectCurrentPlayer);

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

        controller.onStart((playerId, players, tablePack, openCard, curPlayer) => {
            dispatch(start({playerId, players, tablePack, openCard, curPlayer}));
            // dispatch(setPlayerId(playerId));
            // dispatch(setPlayers(players));
            // dispatch(setTablePack(tablePack));
            // dispatch(setOpenCard(openCard));
            // dispatch(setCurrentPlayer(curPlayer));
        });

        controller.onGame((activePlayer, nextPlayer, openCard, tablePack, playerId, card) => {
            dispatch(game({activePlayer, nextPlayer, openCard, tablePack, playerId, card}))
            // dispatch(setCurrentPlayer(activePlayer));
            // dispatch(setNextPlayer(nextPlayer));
            // dispatch(changePlayersCards({playerId, card}));
            // dispatch(setOpenCard(openCard));
        });
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        // console.log(players[currentPlayer], playerId);
        controller.move({ x: event.clientX, y: event.clientY });
    }

    const buttonClick = () => {
        controller.startGame({name: 'Carl'} as PlayerType);
        document.querySelector('.btn-uno')?.classList.add('btn-uno_active');
    }

    // const setSizes = useCallback(() => {
    //     dispatch(setScreenSize({width: window.innerWidth, height: window.innerHeight}));
    // }, [dispatch(setScreenSize)]);

    return (
        <div className="container">
            <button className="btn" onClick={buttonClick}>Click</button>
            <canvas
            ref={ canvasRef }
            width={ CANVAS_WIDTH }
            height={ CANVAS_HEIGHT }
            onClick={ handleClick }
            ></canvas>
            <button className="btn-uno">UNO</button>
        </div>
    )
}
