import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { StForm, StFormSubtitle, StFormTitle } from './style';
import Input from 'components/Input';
import { FormConfigType } from 'types';
import { LoginFormParams } from 'pages/LoginPage/LoginPage';
import { RegFormParams } from 'pages/RegistrationPage/RegistrationPage';
import { useAppDispatch } from '../../hooks/redux';
import { errorReset } from '../../store/auth/authSlice';
import { authState } from '../../hooks/authState';

export type DataType = LoginFormParams & RegFormParams;

type FormProps = {
  title?: string;
  subtitle?: string;
  fields: FormConfigType[];
  footer: React.ReactNode;
  handleFormSubmit: (data: DataType) => void;
};

const Form: FC<FormProps> = ({
  title,
  subtitle,
  handleFormSubmit,
  footer,
  fields,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DataType>({
    mode: 'onBlur',
  });

  const dispatch = useAppDispatch();
  const { authError } = authState();

  const errorCancel = () => {
    if (authError) dispatch(errorReset());
  };

  return (
    <StForm onSubmit={handleSubmit(handleFormSubmit)} onClick={errorCancel}>
      {title && (
        <StFormTitle>
          {title}
          {subtitle && <StFormSubtitle>{subtitle}</StFormSubtitle>}
        </StFormTitle>
      )}

      {fields.map(({ name, pattern, required, label }) => (
        <Input
          key={`input-${name}`}
          register={register}
          error={!!errors[name]?.message}
          errorMessage={errors[name]?.message?.toString()}
          pattern={pattern}
          name={name}
          required={required}
          label={label}
        />
      ))}
      {footer}
    </StForm>
  );
};
export default Form;
