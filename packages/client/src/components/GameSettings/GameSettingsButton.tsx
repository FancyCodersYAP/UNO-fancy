import { StGameSettingsButtonSvg } from './style';
import { StTextContainer, StFlex } from 'styles/global';
import styled from 'styled-components';
import { StButton } from 'components/Button/style';
import { ButtonProps } from 'components/Button/Button';

type GameSettingsButtonType = {
  value: number;
  handleCloseModal: () => void;
} & ButtonProps;

const StGameSettingsButton = styled(StButton)`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  padding: 22px;
`;

const GameSettingsButton = (props: GameSettingsButtonType) => {
  const { value, handleCloseModal } = props;

  const arrayOfImgs = [...Array(value)];

  const handleClick = () => {
    console.log('Количество игроков: ' + value);
    handleCloseModal();
  };

  return (
    <StFlex flexDirection="column">
      <StGameSettingsButton onClick={handleClick}>
        {arrayOfImgs.map((_img, id) => (
          <StGameSettingsButtonSvg key={`player-img-${id + 1}`}>
            <use href="src/assets/icons/icons_sprite.svg#icon-smile"></use>
          </StGameSettingsButtonSvg>
        ))}
      </StGameSettingsButton>
      <StTextContainer textAlign="center">{value} игрока</StTextContainer>
    </StFlex>
  );
};

export default GameSettingsButton;
