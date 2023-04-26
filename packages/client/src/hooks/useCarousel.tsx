import { useEffect, useRef, useState } from 'react';

export default function useCarousel(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const goNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transition = 'all 0.2s ease-in-out';
      ref.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return {
    ref,
    goNext,
    goPrev,
  };
}
