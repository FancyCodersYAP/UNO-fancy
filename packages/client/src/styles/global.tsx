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
  flexDirection?: string;
};

type TextContainerProps = {
  textAlign?: string;
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

export const StTextContainer = styled.p<TextContainerProps>`
  color: ${props => props.theme.COLOR_TEXT_PRIMARY};
  text-align: ${props => (props.textAlign ? props.textAlign : 'start')};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : 'medium')};
  line-height: ${props =>
    props.lineHeight ? `${props.lineHeight}px` : 'normal'};
`;

export const StTextContainerWithShadow = styled(StTextContainer)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StFlex = styled.div<FlexProps>`
  display: flex;
  border-radius: ${props =>
    props.borderRadius ? `${props.borderRadius}px` : 0};
  column-gap: ${props => (props.columnGap ? `${props.columnGap}px` : 0)};
  row-gap: ${props => (props.rowGap ? `${props.rowGap}px` : 0)};
  padding: ${props => (props.padding ? `${props.padding}px` : 0)};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : 0};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'start'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'start')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
`;

export const StFlexBg = styled(StFlex)`
  background-color: ${props => props.theme.COLOR_PREVIEW_SECONDARY};
`;
