import { useRef, useState } from 'react';

export default function useTimer(initialState = 0) {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }

    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsActive(false);
    setIsPaused(true);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
}
