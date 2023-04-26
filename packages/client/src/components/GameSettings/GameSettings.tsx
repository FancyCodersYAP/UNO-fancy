import { StFlex } from 'styles/global';
import GameSettingsButton from './GameSettingsButton';

interface GameSettingsType {
  handleCloseModal: () => void;
  startGame: (playerNums: number) => void;
}

const settingsInputsValue = [2, 4];

const GameSettings = ({ handleCloseModal, startGame }: GameSettingsType) => {
  return (
    <StFlex justifyContent="center" columnGap={60} marginBottom={20}>
      {settingsInputsValue.map((input, id) => (
        <GameSettingsButton
          key={`settings-card-${id}`}
          handleCloseModal={handleCloseModal}
          startGame={startGame}
          value={input}
        />
      ))}
    </StFlex>
  );
};

export default GameSettings;
