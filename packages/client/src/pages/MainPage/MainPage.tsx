import { FC } from 'react';
import Button from 'components/Button';
import { StFlex } from 'styles/global';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Modal from 'components/Modal';
import useModal from 'utils/useModal';
import Rules from 'components/Rules';

const StMainLogo = styled.div`
  padding: 210px 400px;
  opacity: 0.8;
  background: url('src/assets/img/logo.png');
  background-size: cover;
  mix-blend-mode: multiply; //darken color-burn
`;

export const marginTop20 = css`
  margin-top: 20px;
`;

const MainPage: FC = () => {
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
        <Button
          onClick={handleOpenModal}
          css={marginTop20}
          text="Правила"
          disignType="alternate"
        />
      </StFlex>

      {isOpen && (
        <Modal title="Правила игры" handleCloseModal={handleCloseModal}>
          <Rules />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
