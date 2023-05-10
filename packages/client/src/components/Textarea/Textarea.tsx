import { FC, TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StTextarea, StTextareaContainer } from './style';
import { StError } from 'components/Input/style';
import { ValidationPattern, ValidationType } from 'utils/constants';
import { DataType } from '../Form/Form';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';
import { useRef } from 'react';

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
  pattern,
  placeholder,
}) => {
  const options = {
    ...(required && { required: 'Поле не может быть пустым' }),
    ...(pattern && { pattern: ValidationPattern[pattern] }),
  };

  const { ref, ...rest } = register(name, options);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const textarea = textAreaRef.current;

  const combinedRefs = (texteareElement: HTMLTextAreaElement) => {
    ref(texteareElement);
    textAreaRef.current = texteareElement;
  };

  function changeTextareaBorderRadius() {
    if (textarea) {
      if (!(textarea?.scrollHeight === textarea?.offsetHeight)) {
        textarea.style.borderRadius = `${BORDER_RADIUS_SIZE} 5px 5px ${BORDER_RADIUS_SIZE}`;
      } else {
        textarea.style.borderRadius = `${BORDER_RADIUS_SIZE}`;
      }
    }
  }

  return (
    <StTextareaContainer>
      <StTextarea
        {...rest}
        ref={combinedRefs}
        onInput={changeTextareaBorderRadius}
        placeholder={placeholder || ''}></StTextarea>
      {error && <StError>{errorMessage}</StError>}
    </StTextareaContainer>
  );
};

export default Textarea;