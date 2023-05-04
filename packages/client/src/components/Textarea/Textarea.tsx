import { FC, TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StTextarea, StTextareaContainer } from './style';
import { StError } from 'components/Input/style';
import { ValidationPattern, ValidationType } from 'utils/constants';
import { DataType } from '../Form/Form';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';

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

  function changeTextareaBorderRadius() {
    const textarea = document.querySelector(
      `textarea[name="${name}"]`
    ) as HTMLTextAreaElement;

    if (!(textarea?.scrollHeight === textarea?.offsetHeight)) {
      textarea.style.borderRadius = `${BORDER_RADIUS_SIZE} 5px 5px ${BORDER_RADIUS_SIZE}`;
    } else {
      textarea.style.borderRadius = `${BORDER_RADIUS_SIZE}`;
    }
  }

  return (
    <StTextareaContainer>
      <StTextarea
        {...register(name, options)}
        onInput={changeTextareaBorderRadius}
        placeholder={placeholder || ''}></StTextarea>
      {error && <StError>{errorMessage}</StError>}
    </StTextareaContainer>
  );
};

export default Textarea;
