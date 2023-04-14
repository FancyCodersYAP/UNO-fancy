import { ReactNode } from 'react';
import {
  StModal,
  StModalWrapper,
  StModalTitle,
  StModalCloseIcon,
} from './style';
import { StButtonCloseModal } from 'components/Button/style';

interface ModalType {
  children?: ReactNode;
  title?: string;
  handleCloseModal?: () => void;
  width?: number;
  verticalPaddings?: number;
  horizontalPaddings?: number;
}

const Modal = (props: ModalType) => {
  const {
    title,
    handleCloseModal,
    width,
    verticalPaddings,
    horizontalPaddings,
    children,
  } = props;

  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  const checkPossibleToClose = () => {
    if (handleCloseModal) {
      return handleCloseModal();
    }
  };

  return (
    <StModal onClick={checkPossibleToClose}>
      <StModalWrapper
        width={width}
        verticalPaddings={verticalPaddings}
        horizontalPaddings={horizontalPaddings}
        onClick={stopPropagationEvent}>
        {title && <StModalTitle>{title}</StModalTitle>}
        {handleCloseModal && (
          <StButtonCloseModal onClick={handleCloseModal}>
            <StModalCloseIcon>
              <use href="/assets/icons/icons_sprite.svg#icon-close-modal"></use>
            </StModalCloseIcon>
          </StButtonCloseModal>
        )}
        {children}
      </StModalWrapper>
    </StModal>
  );
};

export default Modal;
