import { FC, TextareaHTMLAttributes, useCallback, FormEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {
  StTextarea,
  StTextareaContainer,
  StTextareaLengthMessage,
} from './style';
import { StError } from 'components/Input/style';
import { ValidationType } from 'utils/constants';
import { DataType } from '../Form/Form';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';
import { useRef } from 'react';
import { useState } from 'react';
import EmojisButton from 'components/EmojisButton/EmojisButton';
import useModal from 'hooks/useModal';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  register: UseFormRegister<DataType>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  pattern?: ValidationType;
  placeholder?: string;
}

const Textarea: FC<TextareaProps> = ({
  name,
  register,
  required,
  error,
  errorMessage,
  placeholder,
}) => {
  const [textareaLength, setTextareaLength] = useState(0);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const options = {
    ...(required && { required: 'Поле не может быть пустым' }),
  };

  const { ref, ...rest } = register(name, options);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const combinedRefs = (texteareElement: HTMLTextAreaElement) => {
    ref(texteareElement);
    textAreaRef.current = texteareElement;
  };

  const changeTextareaBorderRadius = () => {
    const textarea = textAreaRef.current;
    handleCloseModal();
    if (textarea) {
      setTextareaLength(textarea.value.length);
      if (!(textarea?.scrollHeight === textarea?.offsetHeight)) {
        textarea.style.borderRadius = `${BORDER_RADIUS_SIZE} 5px 5px ${BORDER_RADIUS_SIZE}`;
      } else {
        textarea.style.borderRadius = `${BORDER_RADIUS_SIZE}`;
      }
    }
  };

  const handleEmoji = () => {
    if (isOpen) {
      handleCloseModal();
    } else {
      handleOpenModal();
    }
  };

  return (
    <StTextareaContainer>
      <StTextareaLengthMessage>{textareaLength}/255</StTextareaLengthMessage>
      <EmojisButton
        handleEmoji={handleEmoji}
        isOpen={isOpen}
        textAreaRef={textAreaRef}
        setTextareaLength={setTextareaLength}
      />
      <StTextarea
        {...rest}
        ref={combinedRefs}
        onInput={changeTextareaBorderRadius}
        maxLength={255}
        placeholder={placeholder || ''}></StTextarea>
      {error && <StError>{errorMessage}</StError>}
    </StTextareaContainer>
  );
};

export default Textarea;
