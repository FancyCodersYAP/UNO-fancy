import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import Button from 'components/Button';
import { StFlexSpaceAround } from 'styles/global';
import medalIcon from 'assets/icons/medal.svg';
import { StTextContainerWithShadow, StFlexSpaceBetween } from 'styles/global';
import { COLOR_PREVIEW_SECONDARY } from 'styles/variables/colors-theme-light';

interface EndGameType {
  time: string;
  countPlace: number;
  points: number;
  result: number;
}

const EndGame = (props: EndGameType) => {
  const { time, countPlace, points, result } = props;

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(AppRoute.MAIN);
  };

  const navigateToGame = () => {
    navigate(AppRoute.GAME);
  };

  return (
    <>
      <StFlexSpaceBetween
        backgroundColor={COLOR_PREVIEW_SECONDARY}
        borderRadius={20}
        columnGap={60}
        padding={25}
        marginBottom={50}>
        <img src={medalIcon} alt="Медаль" width={152} height={216} />
        <div>
          <StTextContainerWithShadow
            fontWeight={500}
            fontSize={25}
            lineHeight={24}>
            время игры: {time}
          </StTextContainerWithShadow>
          <StTextContainerWithShadow
            fontWeight={500}
            fontSize={25}
            lineHeight={24}>
            игроков: {countPlace}
          </StTextContainerWithShadow>
          <StTextContainerWithShadow
            fontWeight={500}
            fontSize={25}
            lineHeight={24}>
            очки: {points}
          </StTextContainerWithShadow>
          <StTextContainerWithShadow
            fontWeight={500}
            fontSize={25}
            lineHeight={24}>
            результат: {result}-е место
          </StTextContainerWithShadow>
        </div>
      </StFlexSpaceBetween>
      <StFlexSpaceAround>
        <Button
          onClick={navigateToMain}
          text="Главное меню"
          disignType="primary"
        />
        <Button
          onClick={navigateToGame}
          text="Сыграть снова"
          disignType="alternate"
        />
      </StFlexSpaceAround>
    </>
  );
};

export default EndGame;
