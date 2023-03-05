import React, { FC } from 'react';
import styled from 'styled-components';
import { TColors } from '../../styles/variables/types';

export const StButton = styled.button`
  background: ${(props: ButtonProps) =>
    props?.primary
      ? props.theme?.PRIMARY_ELEMENT_COLOR
      : props.theme?.PRIMARY_PREVIEW_COLOR};
  color: ${(props: ButtonProps) =>
    props?.primary
      ? props.theme?.MAIN_TEXT_COLOR
      : props.theme?.SECONDARY_ELEMENT_COLOR};
  border: 2px solid #acb5bd;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: ${(props: ButtonProps) => (props?.block ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
`;

type ButtonProps = {
  text?: string;
  primary?: boolean;
  block?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset';
  theme?: TColors;
};

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return <StButton {...rest}>{text}</StButton>;
};

export default Button;
