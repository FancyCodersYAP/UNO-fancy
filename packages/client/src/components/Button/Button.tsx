import { FC } from 'react';
import { ThemeType } from 'styles/variables/types';
import { StButton } from './style';
import { SvgIconProps } from 'types';

export type ButtonProps = {
  text?: string;
  block?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  theme?: ThemeType;
  disignType?: 'primary' | 'secondary' | 'alternate';
  size?: 'small' | 'middle' | 'large';
  svg?: SvgIconProps;
};

const Button: FC<ButtonProps> = ({
  text,
  disignType = 'primary',
  size = 'middle',
  svg,
  ...rest
}) => (
  <StButton disignType={disignType} size={size} {...rest}>
    {!svg?.isLeft && text}

    {svg && (
      <svg width={svg.width} height={svg.height}>
        <use href={svg.url}></use>
      </svg>
    )}

    {svg?.isLeft && text}
  </StButton>
);

export default Button;
