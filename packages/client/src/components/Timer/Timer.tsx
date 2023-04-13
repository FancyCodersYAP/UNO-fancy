import formatTime from 'utils/formatTime';
import useTimer from 'hooks/useTimer';
import { StTimer, StTimerContainer } from './style';

const Timer = () => {
  const { timer } = useTimer(0);

  return (
    <StTimer>
      <StTimerContainer>{formatTime(timer)}</StTimerContainer>
    </StTimer>
  );
};

export default Timer;
