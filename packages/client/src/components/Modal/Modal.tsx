import { ReactNode } from 'react';
import {
  StModal,
  StModalWrapper,
  StModalTitle,
  StModalCloseIcon,
} from './style';
import { StButtonCloseModal } from 'components/Button/style';
import { CSSProp } from 'styled-components';

interface ModalType {
  children?: ReactNode;
  title?: string;
  handleCloseModal?: () => void;
  styles?: CSSProp;
  isCloseOutside?: boolean;
  isCrossButton?: boolean;
}

const Modal = (props: ModalType) => {
  const {
    title,
    handleCloseModal,
    isCloseOutside,
    isCrossButton,
    styles,
    children,
  } = props;

  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  const closeModalOutside = () => {
    if (isCloseOutside) {
      return handleCloseModal?.();
    }
  };

  return (
    <StModal onClick={closeModalOutside}>
      <StModalWrapper css={styles} onClick={stopPropagationEvent}>
        {title && <StModalTitle>{title}</StModalTitle>}
        {isCrossButton && (
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
