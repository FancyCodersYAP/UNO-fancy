import React, { FC } from 'react';
import styled from 'styled-components';
import { ThemeType } from 'styles/variables/types';

export const StButton = styled.button`
  background: ${(props: ButtonProps) =>
    props?.primary
      ? props.theme?.COLOR_ELEMENT_PRIMARY
      : props.theme?.COLOR_PREVIEW_PRIMARY};
  color: ${(props: ButtonProps) =>
    props?.primary
      ? props.theme?.COLOR_TEXT_PRIMARY
      : props.theme?.COLOR_ELEMENT_SECONDARY};
  border: 2px solid #acb5bd; //todo может без бордера оставить? навдо подумать!
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
    inset 4px 4px 4px rgba(130, 128, 128, 0.25); //добавил по макету в фигме для экспереимента
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: ${(props: ButtonProps) => (props?.block ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

type ButtonProps = {
  text?: string;
  primary?: boolean;
  block?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset';
  theme?: ThemeType;
};

const Button: FC<ButtonProps> = ({ text, ...rest }) => (
  <StButton {...rest}>{text}</StButton>
);

export default Button;
