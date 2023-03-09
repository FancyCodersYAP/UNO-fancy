import { ReactNode } from 'react';
import { StModal, StModalWrapper, StModalTitle } from './style';
import { StButtonCloseModal } from 'components/Button/Button';

interface ModalType {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <StModal>
          <StModalWrapper>
            <StModalTitle>{props.title}</StModalTitle>
            <StButtonCloseModal onClick={props.toggle} primary>
              X
            </StButtonCloseModal>
            <div onClick={e => e.stopPropagation()}>{props.children}</div>
          </StModalWrapper>
        </StModal>
      )}
    </>
  );
};

export default Modal;
