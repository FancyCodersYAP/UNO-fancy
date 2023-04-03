import { StFlex } from 'styles/global';
import GameSettingsButton from './GameSettingsButton';

interface GameSettingsType {
  handleCloseModal: () => void;
}

const settingsInputsValue = [
  {
    value: 2,
  },
  {
    value: 4,
  },
];

const GameSettings = (props: GameSettingsType) => {
  const { handleCloseModal } = props;

  return (
    <>
      <StFlex justifyContent="center" columnGap={60} marginBottom={20}>
        {settingsInputsValue.map((input, id) => (
          <GameSettingsButton
            key={`settings-card-${id}`}
            handleCloseModal={handleCloseModal}
            value={input.value}
          />
        ))}
      </StFlex>
    </>
  );
};

export default GameSettings;
