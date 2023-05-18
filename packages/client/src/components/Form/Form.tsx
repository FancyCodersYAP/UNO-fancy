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
import { useAppDispatch } from '../../hooks/redux';
import { errorReset } from '../../store/User/userSlice';
import { userState } from '../../hooks/userState';
import { TopicFormParams } from 'components/AddTopic/AddTopic';

export type DataType = LoginFormParams & RegFormParams & TopicFormParams;

type FormProps = {
  title?: string | ReactNode;
  subtitle?: string;
  fields: FormConfigType[];
  footer: ReactNode;
  handleFormSubmit: (data: DataType) => void;
  avatar?: ReactNode;
  className?: string;
  fieldListCss?: CSSProp;
  defaultValues?: Record<string, string>;
  inputClassName?: string;
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
  defaultValues,
  inputClassName,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DataType>({
    mode: 'onBlur',
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
  });

  const dispatch = useAppDispatch();
  const { userError } = userState();

  const errorCancel = () => {
    if (userError) dispatch(errorReset());
  };

  return (
    <StFormContainer className={className}>
      {title && (
        <StFormTitle>
          {avatar}
          {title}
          {subtitle && <StFormSubtitle>{subtitle}</StFormSubtitle>}
        </StFormTitle>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} onClick={errorCancel}>
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
                className={inputClassName}
                name={name}
                {...rest}
              />
            )
          )}
        </StFieldList>
        {footer}
        <FormError>{userError}</FormError>
      </form>
    </StFormContainer>
  );
};

export default Form;
