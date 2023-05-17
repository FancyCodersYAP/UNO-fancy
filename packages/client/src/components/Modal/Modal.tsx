import { ReactNode } from 'react';
import {
  StModal,
  StModalWrapper,
  StModalTitle,
  StModalCloseIcon,
} from './style';
import { StButtonCloseModal } from 'components/Button/style';
import { CSSProp } from 'styled-components';

type ModalType = {
  children?: ReactNode;
  title?: string;
  handleCloseModal?: () => void;
  styles?: CSSProp;
  canBeClosedOutside?: boolean;
  hasCrossButton?: boolean;
};

const Modal = (props: ModalType) => {
  const {
    title,
    handleCloseModal,
    canBeClosedOutside,
    hasCrossButton,
    styles,
    children,
  } = props;

  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  const closeModalOutside = () => {
    if (canBeClosedOutside) {
      return handleCloseModal?.();
    }
  };

  return (
    <StModal onClick={closeModalOutside}>
      <StModalWrapper css={styles} onClick={stopPropagationEvent}>
        {title && <StModalTitle>{title}</StModalTitle>}
        {hasCrossButton && (
          <StButtonCloseModal
            aria-label="close"
            type="reset"
            onClick={handleCloseModal}>
            <StModalCloseIcon data-testid="close icon">
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
