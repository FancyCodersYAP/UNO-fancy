import { StFlexSpaceBetween } from 'styles/global';
import SettingsRadio from 'components/SettingsRadio/SettingsRadio';
import { StButtonCenter } from 'components/Button/Button';

const settingsInputsValue = [
  {
    value: 2,
  },
  {
    value: 4,
  },
];

const Settings = () => {
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
      <StFlexSpaceBetween columnGap={60} marginBottom={50}>
        {settingsInputsValue.map((input, id) => (
          <SettingsRadio key={`settings-card-${id}`} value={input.value} />
        ))}
      </StFlexSpaceBetween>

      <StButtonCenter type="submit" primary>
        Старт
      </StButtonCenter>
    </form>
  );
};

export default Settings;
