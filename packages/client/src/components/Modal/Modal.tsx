import { ReactNode } from 'react';
import { StModal, StModalWrapper, StModalTitle } from './style';
import { StButtonCloseModal } from 'components/Button/style';

interface ModalType {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = (props: ModalType) => {
  const { isOpen, title, toggle, children } = props;

  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <StModal>
          <StModalWrapper>
            <StModalTitle>{title}</StModalTitle>
            <StButtonCloseModal onClick={toggle}>X</StButtonCloseModal>
            <div onClick={stopPropagationEvent}>{children}</div>
          </StModalWrapper>
        </StModal>
      )}
    </>
  );
};

export default Modal;
