import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

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
};

type TextContainerProps = {
  textAlign?: string;
  width?: number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
};

export const StLink = styled(Link)`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-align: center;
`;

export const StTextContainer = styled.p<TextContainerProps>`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-align: ${props => (props?.textAlign ? props?.textAlign : 'start')};
  width: ${props => (props?.width ? props?.width + 'px' : 'auto')};
  font-weight: ${props => (props?.fontWeight ? props?.fontWeight : 'normal')};
  font-size: ${props => (props?.fontSize ? props?.fontSize + 'px' : 'medium')};
  line-height: ${props =>
    props?.lineHeight ? props?.lineHeight + 'px' : 'normal'};
`;

export const StTextContainerWithShadow = styled(StTextContainer)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StFlex = styled.div<FlexProps>`
  display: flex;
  background-color: ${props =>
    props?.backgroundColor ? props?.backgroundColor : 'initial'};
  border-radius: ${props =>
    props?.borderRadius ? props?.borderRadius + 'px' : 0};
  column-gap: ${props => (props?.columnGap ? props?.columnGap + 'px' : 0)};
  padding: ${props => (props?.padding ? props?.padding + 'px' : 0)};
  margin-bottom: ${props =>
    props?.marginBottom ? props?.marginBottom + 'px' : 0};
`;

export const StFlexSpaceBetween = styled(StFlex)`
  justify-content: space-between;
`;

export const StFlexSpaceAround = styled(StFlex)`
  justify-content: space-around;
`;

export const StCustomRadioInput = styled.input`
  position: absolute;
  opacity: 0;
`;

export const StLabel = styled.label`
  cursor: pointer;
`;
