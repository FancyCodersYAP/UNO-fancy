import { FC } from 'react';
import { TColors } from 'styles/variables/types';
import { StButton } from './style';

export type ButtonProps = {
  text?: string;
  block?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset';
  theme?: TColors;
  disignType?: 'primary' | 'secondary' | 'alternate';
  size?: 'small' | 'middle' | 'large';
};

const Button: FC<ButtonProps> = ({
  text,
  disignType = 'primary',
  size = 'middle',
  ...rest
}) => (
  <StButton disignType={disignType} size={size} {...rest}>
    {text}
  </StButton>
);

export default Button;
