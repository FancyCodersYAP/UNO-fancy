import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import medalIcon from '/assets/icons/medal.svg';
import { StFlex, StFlexBg } from 'styles/global';
import { StEndGameTextWrapper, StEndGameText } from './style';

interface EndGameType {
  time: string;
  countPlace: number;
  points: number;
  result: number;
  reactivateGame: () => void;
}

const EndGame = (props: EndGameType) => {
  const { time, countPlace, points, result, reactivateGame } = props;

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  return (
    <>
      <StFlexBg
        justifyContent="center"
        alignItems="center"
        borderRadius={20}
        padding={25}
        marginBottom={50}>
        <img src={medalIcon} alt="Медаль" width={152} height={216} />
        <StEndGameTextWrapper>
          <StEndGameText fontWeight={500} fontSize={25} lineHeight={24}>
            время игры: {time}
          </StEndGameText>
          <StEndGameText fontWeight={500} fontSize={25} lineHeight={24}>
            игроков: {countPlace}
          </StEndGameText>
          <StEndGameText fontWeight={500} fontSize={25} lineHeight={24}>
            очки: {points}
          </StEndGameText>
          <StEndGameText fontWeight={500} fontSize={25} lineHeight={24}>
            результат: {result}-е место
          </StEndGameText>
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
};

export default EndGame;
