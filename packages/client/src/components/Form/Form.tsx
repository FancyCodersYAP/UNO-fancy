import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import { FieldValues, useForm } from 'react-hook-form';
import { StContainer } from 'styles/global';
import { StFieldList, StFormSubtitle, StFormTitle } from './style';
import Input from 'components/Input';
import { FormConfigType } from 'types';
import { LoginFormParams } from 'pages/LoginPage/LoginPage';

type FormProps = {
  title?: string | React.ReactNode;
  subtitle?: string;
  fields: FormConfigType[];
  footer: React.ReactNode;
  handleFormSubmit: (data: FieldValues | LoginFormParams) => Promise<any>;
  avatar?: React.ReactNode;
  className?: string;
  fieldListCss?: CSSProp;
};

const Form: FC<FormProps> = ({
  title,
  subtitle,
  handleFormSubmit,
  footer,
  fields,
  avatar,
  className,
  fieldListCss,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues | LoginFormParams>({ mode: 'onBlur' });

  return (
    <StContainer className={className}>
      {title && (
        <StFormTitle>
          {avatar}
          {title}
          {subtitle && <StFormSubtitle>{subtitle}</StFormSubtitle>}
        </StFormTitle>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <StFieldList css={fieldListCss}>
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
        </StFieldList>
        {footer}
      </form>
    </StContainer>
  );
};
export default Form;
