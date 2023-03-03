import { useEffect, useState } from 'react';
import { GameComponent } from '../../components/game/Game';
import { PlayerType } from '../../components/game/types';
import { controller } from '../../components/game/core/controller';

export function GamePage() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    controller.onFinish(() => {
      setFinished(true);
    });
  }, []);

  const twoPlBtnClick = () => {
    controller.startGame(2, { name: 'Carl' } as PlayerType);

    const modal = document.getElementById('tempModal');
    if (modal) modal.style.display = 'none';
    document.querySelector('.btn-uno')?.classList.add('btn-uno_active');
  };

  const fourPlBtnClick = () => {
    controller.startGame(4, { name: 'Carl' } as PlayerType);

    const modal = document.getElementById('tempModal');
    if (modal) modal.style.display = 'none';
    document.querySelector('.btn-uno')?.classList.add('btn-uno_active');
  };

  const handleUnoClick = () => {
    controller.unoClick();
  };

  // Модальные окна в div добавлены временно
  return (
    <div id = "game-page" className="bgd container">
      <div
        id="tempModal"
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '300px',
          height: '300px',
          backgroundColor: '#D6A13B',
          borderRadius: '20px',
        }}>
        <button
          onClick={twoPlBtnClick}
          style={{
            padding: '5px',
            height: '30px',
            width: '100px',
            backgroundColor: '#23B7CB',
            borderRadius: '5px',
            textAlign: 'center',
          }}>
          Two players
        </button>
        <button
          onClick={fourPlBtnClick}
          style={{
            padding: '5px',
            height: '30px',
            width: '100px',
            backgroundColor: '#23B7CB',
            borderRadius: '5px',
          }}>
          Four players
        </button>
      </div>
      <GameComponent />
      <button className="btn-uno" onClick={handleUnoClick}>
        UNO
      </button>
      {finished && (
        <div
          style={{
            position: 'absolute',
            zIndex: '20',
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: '#5487a44d',
          }}>
          <div
            style={{
              zIndex: '20',
              width: '300px',
              height: '300px',
              backgroundColor: '#D6A13B',
              margin: 'auto',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              borderRadius: '20px',
            }}>
            Игра завершена
          </div>
        </div>
      )}
      {/* {finished && <EndGame />} */}
    </div>
  );
}
