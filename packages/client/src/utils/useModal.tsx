import { useState } from 'react';

export default function useModal() {
  const [isOpen, setisOpen] = useState(true);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
