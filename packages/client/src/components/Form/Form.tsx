import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { StForm, StFormSubtitle, StFormTitle } from './style';
import Input from 'components/Input';
import { FormConfigType } from 'types';
import { LoginFormParams } from 'pages/Login/Login';

interface FormProps {
  title?: string;
  subtitle?: string;
  fields: FormConfigType[];
  footer: React.ReactNode;
  handleFormSubmit: (data: FieldValues | LoginFormParams) => Promise<any>;
}

const Form: FC<FormProps> = props => {
  const { title, subtitle, handleFormSubmit, footer, fields } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues | LoginFormParams>({ mode: 'onBlur' });

  return (
    <StForm onSubmit={handleSubmit(handleFormSubmit)}>
      {title && <StFormTitle>{title}</StFormTitle>}
      {subtitle && <StFormSubtitle>{subtitle}</StFormSubtitle>}
      {fields.map(item => {
        return (
          <Input
            key={`input-${item.name}`}
            register={register}
            error={Boolean(errors[item.name]?.message)}
            errorMessage={errors[item.name]?.message?.toString()}
            pattern={item.pattern}
            name={item.name}
            required={item.required}
            label={item.label}
          />
        );
      })}
      {footer}
    </StForm>
  );
};
export default Form;
