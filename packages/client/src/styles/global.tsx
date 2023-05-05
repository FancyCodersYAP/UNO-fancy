import styled, { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { resetDefaultStyles } from './normalize';
import { FlexProps, TextContainerProps } from './variables/types';
import { DEPTH_CONTAINER } from 'styles/variables/styleConstants';

export const GlobalStyle = createGlobalStyle`
  ${resetDefaultStyles}

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
  }

  * {
      box-sizing: border-box;
  }
  
  #root,
  html,
  body,
  .App {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;

export const StFormContainer = styled.div`
  position: relative;
  width: 400px;
  min-width: 350px;
  background-color: ${props => props?.theme.COLOR_PREVIEW_PRIMARY};
  padding: 40px 60px;
  box-shadow: ${DEPTH_CONTAINER};
  border-radius: 50px;
`;

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

export const StTextGamePreviewContainer = styled(StTextContainer)`
  font-size: 1.35rem;
  max-width: 500px;
  line-height: 1.7rem;
  margin-left: 10px;
`;

export const StTextContainerWithShadow = styled(StTextContainer)`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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
    justifyContent: justifyContent || 'unset',
    alignItems: alignItems || 'unset',
    flexDirection: flexDirection || 'row',
  };
});

export const StFlexBg = styled(StFlex)`
  background-color: ${props => props.theme.COLOR_PREVIEW_SECONDARY};
`;

export const StContainer = styled(StFlex)`
  max-width: 1300px;
  min-width: 920px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const StCarousel = styled.div`
  width: 636px;
  overflow: hidden;
`;

export const StCarouselBox = styled.div`
  width: 636px;
  height: 400px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const width100Percent = css`
  width: 100%;
`;

export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme?.BACKGROUND_COLOR_SCROLLBAR};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a87f2f;
    border-radius: 10px;
  }
`;
