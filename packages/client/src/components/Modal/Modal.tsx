import { ReactNode } from 'react';
import { StModal, StModalWrapper, StModalTitle } from './style';
import { StButtonCloseModal } from 'components/Button/style';

interface ModalType {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  handleCloseModal: () => void;
  isPossibleToClose?: boolean;
}

const Modal = (props: ModalType) => {
  const { isOpen, title, handleCloseModal, children, isPossibleToClose } =
    props;

  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  const checkPossibleToClose = () => {
    if (isPossibleToClose) {
      return handleCloseModal();
    }

    return;
  };

  return (
    <>
      {isOpen && (
        <StModal onClick={checkPossibleToClose}>
          <StModalWrapper onClick={stopPropagationEvent}>
            <StModalTitle>{title}</StModalTitle>
            {isPossibleToClose && (
              <StButtonCloseModal onClick={handleCloseModal}>
                <img src="src/assets/icons/close.svg" />
              </StButtonCloseModal>
            )}
            {children}
          </StModalWrapper>
        </StModal>
      )}
    </>
  );
};

export default Modal;
