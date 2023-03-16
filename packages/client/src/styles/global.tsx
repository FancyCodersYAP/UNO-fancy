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
  .App{
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
 
`;

export const StLink = styled(Link)`
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

export const StFlex = styled.div`
  gap: ${(props: { gap?: number }) => (props.gap ? `${props.gap}px` : 0)};
  display: flex;
`;

export const StFlexSpaceBetween = styled(StFlex)`
  justify-content: space-between;
`;

export const StFlexColumnDirection = styled(StFlex)`
  flex-direction: column;
`;

export const StFlexAlighItemCenter = styled(StFlex)`
  align-items: center;
`;
