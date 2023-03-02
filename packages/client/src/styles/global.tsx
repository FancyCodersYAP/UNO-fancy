import styled from 'styled-components';
import { CSSProperties } from 'react';
import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

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

export const StSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const linkStyle: CSSProperties = {
  color: variables.textLightColor,
  textAlign: 'center',
};
