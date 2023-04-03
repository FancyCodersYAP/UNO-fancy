import { StFlex } from 'styles/global';
import GameSettingsButton from './GameSettingsButton';

interface GameSettingsType {
  handleCloseModal: () => void;
}

const settingsInputsValue = [2, 4];

const GameSettings = ({ handleCloseModal }: GameSettingsType) => {
  return (
    <StFlex justifyContent="center" columnGap={60} marginBottom={20}>
      {settingsInputsValue.map((input, id) => (
        <GameSettingsButton
          key={`settings-card-${id}`}
          handleCloseModal={handleCloseModal}
          value={input}
        />
      ))}
    </StFlex>
  );
};

export default GameSettings;
