import { useRef, useState } from 'react';

export default function useTimer(initialState = 0) {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsActive(false);
  };

  const handleResume = () => {
    if (isActive) {
      return;
    }
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsActive(false);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
}
