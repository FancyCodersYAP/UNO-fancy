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

type CarouselBoxProps = {
  width?: number;
  height?: number;
};

export const StLink = styled(Link)`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-decoration: none;
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`;

export const StNavLink = styled(NavLink)`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-decoration: none;
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`;

export const StTextContainer = styled.p`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  width: ${(props: { width?: number }) =>
    props.width ? `${props.width}px` : 'auto'};
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

export const StCarousel = styled.div`
  width: ${(props: { width?: number }) =>
    props?.width ? props?.width + 'px' : 'auto'};
  overflow: hidden;
`;

export const StCarouselBoxContainer = styled.div`
  display: flex;
`;

export const StCarouselBox = styled.div<CarouselBoxProps>`
  box-sizing: border-box;
  width: ${props => (props?.width ? props?.width + 'px' : 'auto')};
  height: ${props => (props?.height ? props?.height + 'px' : 'auto')};
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
