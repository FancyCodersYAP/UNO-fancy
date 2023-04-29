import { FC, TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StTextarea, StTextareaContainer } from './style';
import { StError } from 'components/Input/style';
import { ValidationPattern, ValidationType } from 'utils/constants';
import { DataType } from '../Form/Form';

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

  return (
    <StTextareaContainer>
      <StTextarea
        {...register(name, options)}
        placeholder={placeholder || ''}
        maxLength={255}></StTextarea>
      {error && <StError>{errorMessage}</StError>}
    </StTextareaContainer>
  );
};

export default Textarea;
