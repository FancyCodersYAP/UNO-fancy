import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
