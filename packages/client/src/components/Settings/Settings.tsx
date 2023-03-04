// import { useNavigate } from 'react-router-dom';
// import { AppRoute } from '../../consts';
import { useSelector, useDispatch } from 'react-redux';
//import { palyWithComputer } from '../../store/action';
//import { GameWithComputerStatus } from '../../consts';
import { StSettings, StSettingsWrapper, StSettingsTitle, StSettingsForm, StSettingsRadios, StSettingsRadioWrapper, StSettingsInput, StSettingsLabel, StSettingsImg, StSettingsText, StSettingsCheckboxWrapper, StSettingsButton } from './style';
import Button from 'components/Button';

const Settings = () => {
  const { gameWithComputerStatus } = useSelector((state: any) => state.GAME)
  //const dispatch = useDispatch();
  // const navigate = useNavigate()

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    const usersInputs = document.querySelectorAll('input[name="users"]') as unknown as Array<any>;
    let usersCount;
    usersInputs.forEach((input) => {
      if (input.checked) {
        usersCount = input.value;
      }
    });

    const computerEl = document.querySelector('input[name="computer"]') as HTMLInputElement;
    if (computerEl.checked) {
      // При отправки формы должено менятся значение gameWithComputerStatus с DISABLED на ENABLE
      //dispatch(palyWithComputer(GameWithComputerStatus.ENABLE))
    }

    console.log('Количество игроков: ' + usersCount, 'Игра с компьютером: ' + gameWithComputerStatus);
    // navigate(AppRoute.GAME)
  }

  return (
    <StSettings>
      <StSettingsWrapper>
        <StSettingsTitle>Количество игроков:</StSettingsTitle>

        <StSettingsForm onSubmit={onSubmit}>
          <StSettingsRadios>
            <StSettingsRadioWrapper>
              <StSettingsInput type="radio" id="user-2" name="users" value="2" required/>
              <StSettingsLabel htmlFor="user-2">
                <StSettingsImg src="src/assets/img/icon2Users.svg" alt="2 игрока" width="75px;" height="75px;" />
                <StSettingsText>2 игрока</StSettingsText>
              </StSettingsLabel>
            </StSettingsRadioWrapper>
            
            <StSettingsRadioWrapper>
              <StSettingsInput type="radio" id="user-3" name="users" value="3" />
              <StSettingsLabel htmlFor="user-3">
                <StSettingsImg src="src/assets/img/icon3Users.svg" alt="3 игрока" width="75px;" height="75px;" />
                <StSettingsText>3 игрока</StSettingsText>
              </StSettingsLabel>
            </StSettingsRadioWrapper>
          
            <StSettingsRadioWrapper>
              <StSettingsInput type="radio" id="user-4" name="users" value="4" />
              <StSettingsLabel htmlFor="user-4">
                <StSettingsImg src="src/assets/img/icon4Users.svg" alt="4 игрока" width="75px;" height="75px;" />
                <StSettingsText>4 игрока</StSettingsText>
              </StSettingsLabel>
            </StSettingsRadioWrapper>
          </StSettingsRadios>

          <StSettingsCheckboxWrapper>
            <StSettingsInput type="checkbox" id="computer" name="computer" />
            <StSettingsLabel htmlFor="computer">
              <StSettingsImg src="src/assets/img/iconBot.png" alt="Бот" width="75px;" height="75px;" />
              <StSettingsText>Игра с компьютером</StSettingsText>
            </StSettingsLabel>
          </StSettingsCheckboxWrapper>

          <Button text="Начать игру" type="submit" primary block />
        </StSettingsForm>
      </StSettingsWrapper>
    </StSettings>
  )
}

export default Settings;