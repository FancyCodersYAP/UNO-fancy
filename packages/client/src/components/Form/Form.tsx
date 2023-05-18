import { FC, useMemo, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { FormError, StFieldList, StFormSubtitle, StFormTitle } from './style';
import { CSSProp } from 'styled-components';
import { StFormContainer } from 'styles/global';

import Input from 'components/Input';
import Textarea from 'components/Textarea/Textarea';
import { FormConfigType } from 'types';
import { LoginFormParams } from 'pages/LoginPage/LoginPage';
import { RegFormParams } from 'pages/RegistrationPage/RegistrationPage';
import { TopicFormParams } from 'components/AddTopic/AddTopic';
import { MessageFormParams } from 'components/AddAnswer/AddAnswer';

export type DataType = LoginFormParams &
  RegFormParams &
  TopicFormParams &
  MessageFormParams;

type FormProps = {
  title?: string | ReactNode;
  subtitle?: string;
  fields: FormConfigType[];
  footer: ReactNode;
  handleFormSubmit: (data: DataType) => void;
  avatar?: ReactNode;
  className?: string;
  fieldListCss?: CSSProp;
  inputCss?: CSSProp;
  defaultValues?: Record<string, string>;
  error?: string;
  errorReset?: () => void;
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
  inputCss,
  defaultValues,
  error,
  errorReset,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DataType>({
    mode: 'onBlur',
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
  });

  return (
    <StFormContainer className={className}>
      {title && (
        <StFormTitle>
          {avatar}
          {title}
          {subtitle && <StFormSubtitle>{subtitle}</StFormSubtitle>}
        </StFormTitle>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} onClick={errorReset}>
        <StFieldList css={fieldListCss}>
          {fields.map(({ name, textarea, ...rest }) =>
            textarea ? (
              <Textarea
                key={`textarea-${name}`}
                register={register}
                error={!!errors[name]?.message}
                errorMessage={errors[name]?.message?.toString()}
                name={name}
                {...rest}></Textarea>
            ) : (
              <Input
                key={`input-${name}`}
                register={register}
                error={!!errors[name]?.message}
                errorMessage={errors[name]?.message?.toString()}
                inputCss={inputCss}
                name={name}
                {...rest}
              />
            )
          )}
        </StFieldList>
        {footer}
        <FormError>{error}</FormError>
      </form>
    </StFormContainer>
  );
};

export default Form;
