import { StGameSettingsButtonImg, StGameSettingsButtonImgs } from './style';
import { StTextContainer } from 'styles/global';
import SmileIcon from 'assets/icons/smiled.svg';
import styled, { css } from 'styled-components';
import { StButton } from 'components/Button/style';

interface GameSettingsButtonType {
  value: number;
  onClick?: (evt: { target: HTMLButtonElement }) => void;
}

const buttonStyle = css`
  box-shadow: none;
  background-color: initial;
  display: block;
  margin: 0;
`;

const ChooseCountOfPlayersButton = styled(StButton)``;

const GameSettingsButton = (props: GameSettingsButtonType) => {
  const { value, onClick } = props;

  const arrayOfImgs = [...Array(value)];

  return (
    <>
      <ChooseCountOfPlayersButton
        css={buttonStyle}
        data-players={value}
        onClick={onClick}
        disignType="primary">
        <StGameSettingsButtonImgs>
          {arrayOfImgs.map((img, id) => (
            <StGameSettingsButtonImg
              key={`player-img-${id + 1}`}
              src={SmileIcon}
              alt={`Игрок ${id + 1}`}
            />
          ))}
        </StGameSettingsButtonImgs>
        <StTextContainer textAlign="center">{value} игрока</StTextContainer>
      </ChooseCountOfPlayersButton>
    </>
  );
};

export default GameSettingsButton;
