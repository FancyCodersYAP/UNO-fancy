import Button from 'components/Button';
import { StFlexSpaceBetween } from 'styles/global';
import SettingsCard from 'components/SettingsCard/SettingsCard';

const settingsCards = [
  {
    name: 'users',
    value: 2,
  },
  {
    name: 'users',
    value: 4,
  },
];

const Settings = () => {
  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const usersInputs = document.querySelectorAll(
      'input[name="users"]'
    ) as unknown as Array<any>;
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
      <StFlexSpaceBetween>
        {settingsCards.map((card, id) => (
          <SettingsCard
            key={`settings-card-${id}`}
            name={card.name}
            value={card.value}
          />
        ))}
      </StFlexSpaceBetween>

      <Button text="Старт" type="submit" primary block />
    </form>
  );
};

export default Settings;
