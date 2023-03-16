import {
  StSettingsRadioWrapper,
  StSettingsInput,
  StSettingsLabel,
  StSettingsImg,
  StSettingsImgs,
} from './style';
import { StTextContainer } from 'styles/global';
import SmileIcon from 'assets/icons/smiled.svg';

interface SettingsCardType {
  name: string;
  value: number;
}

const SettingsCard = (props: SettingsCardType) => {
  const { name, value } = props;

  const arr = [...Array(value)];

  return (
    <StSettingsRadioWrapper>
      <StSettingsInput
        type="radio"
        id={`user-${value}`}
        name={name}
        value={value}
        required
      />
      <StSettingsLabel htmlFor={`user-${value}`}>
        <StSettingsImgs>
          {arr.map((img, id) => (
            <StSettingsImg
              key={`player-img-${id}`}
              src={SmileIcon}
              alt={`Игрок ${id + 1}`}
            />
          ))}
        </StSettingsImgs>

        <StTextContainer>{value} игрока</StTextContainer>
      </StSettingsLabel>
    </StSettingsRadioWrapper>
  );
};

export default SettingsCard;
