import formatTime from 'utils/formatTime';
import { StTimer, StTimerContainer } from './style';

type TimerProps = {
  timer: number;
};

const Timer = ({ timer }: TimerProps) => {
  return (
    <StTimer>
      <StTimerContainer>{formatTime(timer)}</StTimerContainer>
    </StTimer>
  );
};

export default Timer;
