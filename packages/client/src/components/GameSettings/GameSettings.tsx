import { StFlex } from 'styles/global';
import GameSettingsButton from './GameSettingsButton';

const settingsInputsValue = [
  {
    value: 2,
  },
  {
    value: 4,
  },
];

const chooseCountOfPlayers = (evt: { target: HTMLButtonElement }) => {
  const buttonWithPlayers = evt.target.closest('button');
  const usersCount = buttonWithPlayers?.dataset.players;
  console.log('Количество игроков: ' + usersCount);
};

const GameSettings = () => {
  return (
    <>
      <StFlex justifyContent="center" columnGap={60} marginBottom={20}>
        {settingsInputsValue.map((input, id) => (
          <GameSettingsButton
            key={`settings-card-${id}`}
            onClick={chooseCountOfPlayers}
            value={input.value}
          />
        ))}
      </StFlex>
    </>
  );
};

export default GameSettings;
