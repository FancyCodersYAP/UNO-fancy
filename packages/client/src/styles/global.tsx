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

export const StContainer = styled.div`
  width: 400px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  padding: 40px 60px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

export const StLink = styled(Link)`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-align: center;
`;

export const StTextContainer = styled.p`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-align: center;
  width: ${(props: { width?: number }) =>
    props?.width ? props?.width + 'px' : 'auto'};
`;

export const StFlex = styled.div`
  display: flex;
`;

export const StFlexSpaceBetween = styled(StFlex)`
  justify-content: space-between;
`;
