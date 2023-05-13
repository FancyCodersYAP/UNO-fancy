import Button from 'components/Button';
import { StFlex, StFlexBg } from 'styles/global';
import { StEndGameTextWrapper, StMedalIcon } from './style';
import EndGameText from './EndGameText';
import { EndGameType } from './types';

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
      <StMedalIcon
        data-testid="medal icon"
        isWin={result === 'Победа' ? true : false}>
        <use href="/assets/icons/icons_sprite.svg#medal"></use>
      </StMedalIcon>
      <StEndGameTextWrapper>
        <EndGameText text={`время игры: ${time}`} />
        <EndGameText text={`игроков: ${countPlace}`} />
        <EndGameText text={`очки: ${points}`} />
        <EndGameText text={`результат: ${result}`} />
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
