import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { StForm, StFormSubtitle, StFormTitle } from './style';
import Input from 'components/Input';
import { FormConfigType } from 'types';
import { LoginFormParams } from 'pages/LoginPage/LoginPage';

type FormProps = {
  title?: string;
  subtitle?: string;
  fields: FormConfigType[];
  footer: React.ReactNode;
  handleFormSubmit: (data: FieldValues | LoginFormParams) => Promise<any>;
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
  } = useForm<FieldValues | LoginFormParams>({ mode: 'onBlur' });

  return (
    <StForm onSubmit={handleSubmit(handleFormSubmit)}>
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
