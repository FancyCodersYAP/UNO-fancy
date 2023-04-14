import GameSettings from 'components/GameSettings';
import useModal from 'utils/useModal';
import Modal from 'components/Modal';
import styled from 'styled-components';
import { StFlex } from 'styles/global';
import { useGameContext } from 'contexts/GameContext';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function GamePage() {
  const { isOpen, handleCloseModal } = useModal();
  const { changeGameStatus, addSound, onPlay } = useGameContext();

  const startGame = () => {
    changeGameStatus?.();
    addSound?.('background');
    addSound?.('movement');
  };

  /* После мёрджа с игрой звук будет срабатывать на перемещении карты */
  const playMovementSound = () => {
    if (onPlay) onPlay('movement');
  };

  return (
    <StGameFlex id="game-page" onClick={playMovementSound}>
      {isOpen && (
        <Modal title="Выбор режима игры">
          <GameSettings
            handleCloseModal={handleCloseModal}
            startGame={startGame}
          />
        </Modal>
      )}
    </StGameFlex>
  );
}
