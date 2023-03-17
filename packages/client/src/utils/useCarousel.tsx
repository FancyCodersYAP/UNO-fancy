import { useEffect, useRef, useState } from 'react';

export default function useCarousel(totalSlides: number) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const next = () => {
    if (current >= totalSlides - 1) return;
    else setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out';
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return {
    current,
    ref,
    next,
    prev,
  };
}
