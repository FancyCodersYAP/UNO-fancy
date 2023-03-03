import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  * {
      box-sizing: border-box;
  }
  
  #root,
  body,
  .App{
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
 
`;

export const StLink = styled(Link)`
  color: ${variables.textLightColor};
  text-align: center;
`;

export const StTextContainer = styled.div`
  color: ${variables.textLightColor};
  text-align: center;
  width: ${(props: { width?: number }) =>
    props?.width ? props?.width + 'px' : 'auto'};
`;
