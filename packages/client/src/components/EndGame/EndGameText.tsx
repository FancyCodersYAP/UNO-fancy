import { StEndGameText } from './style';

interface EndGameType {
  text: string;
}

const EndGameText = ({ text }: EndGameType) => {
  return (
    <StEndGameText fontWeight={500} fontSize={25} lineHeight={24}>
      {text}
    </StEndGameText>
  );
};

export default EndGameText;
