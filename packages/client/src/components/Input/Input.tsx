import React, { FC, InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { StError, StInput, StInputContainer, StLabel } from './style';
import { ValidationPattern, ValidationType } from 'utils/constants';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  pattern?: ValidationType;
}

const Input: FC<InputProps> = ({
  name,
  label,
  register,
  required,
  error,
  errorMessage,
  pattern,
  ...props
}) => {
  const options = {
    ...(required && { required: 'Поле не может быть пустым' }),
    ...(pattern && { pattern: ValidationPattern[pattern] }),
    ...props,
  };
  return (
    <StInputContainer>
      <StInput {...props} {...register(name, options)} placeholder=" " />
      <StLabel>{label}</StLabel>
      {error && <StError>{errorMessage}</StError>}
    </StInputContainer>
  );
};

export default Input;
