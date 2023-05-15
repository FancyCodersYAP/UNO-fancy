import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StError, StInput, StInputContainer, StLabel } from './style';
import { ValidationPattern, ValidationType } from 'utils/constants';
import { CSSProp } from 'styled-components';
import { DataType } from '../Form/Form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<DataType>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  pattern?: ValidationType;
  inputCss?: CSSProp;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  register,
  required,
  error,
  errorMessage,
  pattern,
  inputCss,
  placeholder,
  ...rest
}) => {
  const options = {
    ...(required && { required: 'Поле не может быть пустым' }),
    ...(pattern && { pattern: ValidationPattern[pattern] }),
  };

  return (
    <StInputContainer>
      <StInput
        {...register(name, options)}
        placeholder={placeholder || ''}
        css={inputCss}
        id={name}
        {...rest}
      />
      <StLabel htmlFor={name}>{label}</StLabel>
      {error && <StError>{errorMessage}</StError>}
    </StInputContainer>
  );
};

export default Input;
