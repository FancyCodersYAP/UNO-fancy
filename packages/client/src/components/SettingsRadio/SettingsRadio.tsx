import { StSettingsRadioImg, StSettingsRadioImgs } from './style';
import { StTextContainer, StCustomRadioInput, StLabel } from 'styles/global';
import SmileIcon from 'assets/icons/smiled.svg';

interface SettingsRadioType {
  value: number;
}

const SettingsRadio = (props: SettingsRadioType) => {
  const { value } = props;

  const arr = [...Array(value)];

  return (
    <div>
      <StCustomRadioInput
        type="radio"
        id={`user-${value}`}
        name="users"
        value={value}
        required
      />
      <StLabel htmlFor={`user-${value}`}>
        <StSettingsRadioImgs>
          {arr.map((img, id) => (
            <StSettingsRadioImg
              key={`player-img-${id}`}
              src={SmileIcon}
              alt={`Игрок ${id + 1}`}
            />
          ))}
        </StSettingsRadioImgs>

        <StTextContainer textAlign="center">{value} игрока</StTextContainer>
      </StLabel>
    </div>
  );
};

export default SettingsRadio;
