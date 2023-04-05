import { useEffect, useRef, useState } from 'react';

export default function useCarousel(totalSlides: number) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const goNext = () => {
    if (current < totalSlides) {
      setCurrent(current + 1);
    }
  };

  const goPrev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transition = 'all 0.2s ease-in-out';
      ref.current.style.transform = `translateX(-${current}00%)`;
    }
  }, [current]);

  return {
    current,
    ref,
    goNext,
    goPrev,
  };
}
