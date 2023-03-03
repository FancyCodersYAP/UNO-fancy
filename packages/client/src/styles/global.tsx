import styled from 'styled-components';
import { CSSProperties } from 'react';
import { createGlobalStyle } from 'styled-components';
import * as COLORS from 'styles/variables/colors'

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
  color: COLORS.MAIN_TEXT_COLOR,
  textAlign: 'center',
};
