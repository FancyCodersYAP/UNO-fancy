import { StFlex } from 'styles/global';
import SettingsRadio from 'components/SettingsRadio/SettingsRadio';
import Button from 'components/Button';
import { css } from 'styled-components';

const settingsInputsValue = [
  {
    value: 2,
  },
  {
    value: 4,
  },
];

const startButtonStyles = css`
  padding: 20px 50px;
  border-radius: 20px;
  border: none;
`;

const GameSettings = () => {
  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const usersInputs = document.querySelectorAll(
      'input[name="users"]'
    ) as NodeListOf<HTMLInputElement>;
    let usersCount;
    usersInputs.forEach(input => {
      if (input.checked) {
        usersCount = input.value;
      }
    });

    console.log('Количество игроков: ' + usersCount);
  };

  return (
    <form onSubmit={onSubmit}>
      <StFlex justifyContent="center" columnGap={60} marginBottom={50}>
        {settingsInputsValue.map((input, id) => (
          <SettingsRadio key={`settings-card-${id}`} value={input.value} />
        ))}
      </StFlex>

      <Button
        css={startButtonStyles}
        text="Старт"
        type="submit"
        disignType="alternate"
      />
    </form>
  );
};

export default GameSettings;
