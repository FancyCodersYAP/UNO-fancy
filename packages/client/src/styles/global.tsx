import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
  }

  * {
    box-sizing: border-box;
  }

  #root,
  html,
  body,
  .App {
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

export const StNavLink = styled(NavLink)`
  position: relative;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  text-decoration: none;
  cursor: pointer;

  &:after {
    position: absolute;
    transform: scaleX(0);
    display: block;
    content: '';
    height: 4px;
    width: 100%;
    top: 100%;
    background: white;
    margin-top: 8px;
    transition: transform 250ms ease-in-out;
  }

  &&.active:after,
  &&:hover:after {
    transform: scaleX(1);
  }
`;

export const StTextContainer = styled.p`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  width: ${(props: { width?: number }) =>
    props.width ? `${props.width}px` : 'auto'};
`;

export const StTextGamePreviewContainer = styled(StTextContainer)`
  font-size: 1.35rem;
  max-width: 500px;
  line-height: 1.7rem;
  margin-left: 10px;
`;

export const StFlex = styled.div`
  gap: ${(props: { gap?: number }) => (props.gap ? `${props.gap}px` : 0)};
  display: flex;
`;

export const StContainer = styled(StFlex)`
  max-width: 1300px;
  min-width: 920px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const StFlexSpaceBetween = styled(StFlex)`
  justify-content: space-between;
`;

export const StFlexColumnDirection = styled(StFlex)`
  flex-direction: column;
`;

export const StFlexAlignItemCenter = styled(StFlex)`
  align-items: center;
`;
