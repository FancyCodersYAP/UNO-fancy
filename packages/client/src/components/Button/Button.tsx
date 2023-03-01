import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from 'styles/variables';

export const StButton = styled.button`
  background: ${(props: ButtonProps) =>
    props?.primary
      ? variables.backgroundPrimaryButton
      : 'linear-gradient(180deg, #D6A13B 0%, rgba(255, 255, 255, 0) 100%)'};
  color: ${(props: ButtonProps) =>
    props?.primary
      ? variables.colorPrimaryButton
      : variables.colorDefaultButton};
  border: 2px solid #acb5bd;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: ${(props: ButtonProps) => (props?.block ? '100%' : 'auto')};
`;

type ButtonProps = {
  text: string;
  primary?: boolean;
  block?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: FC<ButtonProps> = props => {
  const { text, type = 'button' } = props;

  return (
    <StButton type={type} {...props}>
      {text}
    </StButton>
  );
};

export default Button;
