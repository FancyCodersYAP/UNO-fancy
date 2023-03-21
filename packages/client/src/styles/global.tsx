import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif,serif;
  }

  * {
      box-sizing: border-box;
  }
  
  #root,
  body,
  .App {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;

type FlexProps = {
  backgroundColor?: string;
  borderRadius?: number;
  columnGap?: number;
  padding?: number;
  marginBottom?: number;
  rowGap?: number;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: 'column' | 'row';
};

type TextContainerProps = {
  textAlign?: 'start' | 'end' | 'center';
  width?: number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
};

export const StLink = styled(Link)`
  color: ${props => props.theme.COLOR_TEXT_PRIMARY};
  text-decoration: none;
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`;

export const StNavLink = styled(NavLink)`
  color: ${props => props.theme.COLOR_TEXT_PRIMARY};
  text-decoration: none;
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`;

export const StTextContainer = styled.p<TextContainerProps>(props => {
  const { theme, textAlign, width, fontWeight, fontSize, lineHeight } = props;

  return {
    color: theme.COLOR_TEXT_PRIMARY,
    textAlign: textAlign || 'left',
    width: width ? `${width}px` : 'auto',
    fontWeight: fontWeight || 'normal',
    fontSize: fontSize ? `${fontSize}px` : 'medium',
    lineHeight: lineHeight ? `${lineHeight}px` : 'normal',
  };
});

export const StTextContainerWithShadow = styled(StTextContainer)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StFlex = styled.div<FlexProps>(props => {
  const {
    borderRadius,
    columnGap,
    rowGap,
    padding,
    marginBottom,
    justifyContent,
    alignItems,
    flexDirection,
  } = props;

  return {
    display: 'flex',
    borderRadius: borderRadius ? `${borderRadius}px` : 0,
    columnGap: columnGap ? `${columnGap}px` : 0,
    rowGap: rowGap ? `${rowGap}px` : 0,
    padding: padding ? `${padding}px` : 0,
    marginBottom: marginBottom ? `${marginBottom}px` : 0,
    justifyContent: justifyContent || 'start',
    alignItems: alignItems || 'start',
    flexDirection: flexDirection || 'row',
  } as FlexProps;
});

export const StFlexBg = styled(StFlex)`
  background-color: ${props => props.theme.COLOR_PREVIEW_SECONDARY};
`;
