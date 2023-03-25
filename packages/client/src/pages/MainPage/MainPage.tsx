import { FC } from 'react';
import Button from 'components/Button';
import { StFlex } from 'styles/global';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Modal from 'components/Modal/Modal';
import GameSettings from 'components/GameSettings/GameSettings';
import useModal from 'utils/useModal';

const StImageBox = styled.div`
  height: 350px;
  opacity: 0.5;
  && img {
    height: 100%;
  }
`;

const MainPage: FC = () => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate(AppRoute.GAME);
  };

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <Modal
        title="Выбор режима игры"
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}>
        <GameSettings />
      </Modal>
      <StFlex flexDirection="column" rowGap={40}>
        <StImageBox>
          <img src="src/assets/img/logo.png" alt="logo" />
        </StImageBox>
        <Button text="Начать игру" size="large" onClick={handlePlay} />
        <Button text="Правила" disignType="alternate" />
      </StFlex>
    </>
  );
};
export default MainPage;
