import { useState } from 'react';

export default function useModal() {
  const [isOpen, setisOpen] = useState(true);

  const handleOpenModal = () => {
    setisOpen(true);
  };

  const handleCloseModal = () => {
    setisOpen(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
