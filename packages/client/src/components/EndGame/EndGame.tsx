import Button from 'components/Button';
import medalIcon from '/assets/icons/medal.svg';
import { StFlex, StFlexBg } from 'styles/global';
import { StEndGameTextWrapper } from './style';
import EndGameText from './EndGameText';

interface EndGameType {
  time: string;
  countPlace: number;
  points: number;
  result: string;
  reactivateGame: () => void;
  navigateToMain: () => void;
}

const EndGame = ({
  time,
  countPlace,
  points,
  result,
  reactivateGame,
  navigateToMain,
}: EndGameType) => (
  <>
    <StFlexBg
      justifyContent="center"
      alignItems="center"
      borderRadius={20}
      padding={25}
      marginBottom={50}>
      <img src={medalIcon} alt="Медаль" width={152} height={216} />
      <StEndGameTextWrapper>
        <EndGameText text={`результат: ${result}`} />
        <EndGameText text={`очки: ${points}`} />
        <EndGameText text={`игроков: ${countPlace}`} />
        <EndGameText text={`время игры: ${time}`} />
      </StEndGameTextWrapper>
    </StFlexBg>

    <StFlex>
      <Button
        onClick={navigateToMain}
        text="Главное меню"
        disignType="primary"
      />
      <Button
        onClick={reactivateGame}
        text="Сыграть снова"
        disignType="alternate"
      />
    </StFlex>
  </>
);

export default EndGame;
