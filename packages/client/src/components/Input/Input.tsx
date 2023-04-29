import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {
  StError,
  StInput,
  StTextarea,
  StInputContainer,
  StLabel,
} from './style';
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
  textarea?: boolean;
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
  textarea,
  ...rest
}) => {
  const options = {
    ...(required && { required: 'Поле не может быть пустым' }),
    ...(pattern && { pattern: ValidationPattern[pattern] }),
  };

  return (
    <StInputContainer>
      {textarea ? (
        <StTextarea
          {...register(name, options)}
          placeholder={placeholder || ''}
          maxLength={255}></StTextarea>
      ) : (
        <StInput
          {...register(name, options)}
          placeholder={placeholder || ''}
          css={inputCss}
          {...rest}
        />
      )}
      <StLabel>{label}</StLabel>
      {error && <StError>{errorMessage}</StError>}
    </StInputContainer>
  );
};

export default Input;
