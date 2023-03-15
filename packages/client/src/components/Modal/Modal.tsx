import { ReactNode } from 'react';
import { StModal, StModalWrapper, StModalTitle } from './style';
import { StButtonCloseModal } from 'components/Button/Button';

interface ModalType {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  toggle: () => void;
  isPossibleToClose?: boolean;
}

const Modal = (props: ModalType) => {
  const { isOpen, title, toggle, children, isPossibleToClose } = props;

  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  const checkPossibleToClose = () => {
    if (isPossibleToClose) {
      return toggle();
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
              <StButtonCloseModal onClick={toggle} primary>
                X
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
