import formatTime from 'utils/formatTime';
import useTimer from 'hooks/useTimer';
import { StTimer, StTimerContainer } from './style';

const Timer = () => {
  const { timer, handleStart, handlePause, handleResume, handleReset } =
    useTimer(0);

  return (
    <StTimer>
      <StTimerContainer>{formatTime(timer)}</StTimerContainer>

      {/* Временный код для проверки таймера */}
      {/* <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReset}>Reset</button>
      </div> */}
    </StTimer>
  );
};

export default Timer;
