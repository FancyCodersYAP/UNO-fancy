import { FC } from 'react';
import Button from 'components/Button';
import { StFlex } from 'styles/global';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import Rules from 'components/Rules';
import { useTitle, TITLES } from 'utils/useTitle';

const StMainLogo = styled.div`
  padding: 210px 400px;
  opacity: 0.8;
  background: url('/assets/img/logo.png');
  background-size: cover;
  mix-blend-mode: multiply; //darken color-burn
`;

const StyledButtonWithMargin = styled(Button)`
  margin-top: 20px;
`;

const MainPage: FC = () => {
  useTitle(TITLES.main);
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate(AppRoute.GAME);
  };

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <StFlex
        flexDirection="column"
        rowGap={40}
        alignItems="stretch"
        marginBottom={100}>
        <StMainLogo />
        <Button text="Начать игру" size="large" onClick={handlePlay} />
        <StyledButtonWithMargin
          onClick={handleOpenModal}
          text="Правила"
          disignType="alternate"
        />
      </StFlex>

      {isOpen && (
        <Modal
          title="Правила игры"
          handleCloseModal={handleCloseModal}
          canBeClosedOutside
          hasCrossButton>
          <Rules />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
