import GameSettings from 'components/GameSettings';
import useModal from 'utils/useModal';
import Modal from 'components/Modal';
import styled from 'styled-components';
import { StFlex } from 'styles/global';
import { useAppDispatch } from '../../hooks/redux';
import { changeGameStatus } from '../../store/game/gameSlice';

export const StGameFlex = styled(StFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function GamePage() {
  const { isOpen, handleCloseModal } = useModal();

  const dispatch = useAppDispatch();

  const startGame = () => {
    dispatch(changeGameStatus());
  };

  return (
    <StGameFlex id="game-page">
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
