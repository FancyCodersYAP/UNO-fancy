import styled from 'styled-components';
import { ButtonProps } from './Button';
import { BOX_SHADOW_BUTTON } from 'styles/variables/styleConstants';

export const StButton = styled.button`
  background: ${(props: ButtonProps) => {
    switch (props?.disignType) {
      case 'primary':
        return props.theme?.COLOR_ELEMENT_PRIMARY;
      case 'secondary':
        return `linear-gradient(180deg, ${props.theme?.COLOR_PREVIEW_PRIMARY} 0%, rgba(255, 255, 255, 0.3) 50%, ${props.theme?.COLOR_PREVIEW_PRIMARY} 100%);`;
      case 'alternate':
        return props.theme?.COLOR_ELEMENT_ALTERNATE;
      default:
        return props.theme?.COLOR_ELEMENT_PRIMARY;
    }
  }};
  color: ${(props: ButtonProps) => {
    switch (props?.disignType) {
      case 'primary':
        return props.theme?.COLOR_TEXT_PRIMARY;
      case 'secondary':
        return props.theme?.COLOR_ELEMENT_SECONDARY;
      case 'alternate':
        return props.theme?.COLOR_TEXT_PRIMARY;
      default:
        return props.theme?.COLOR_TEXT_PRIMARY;
    }
  }};
  border: ${(props: ButtonProps) => {
    return props?.disignType === 'secondary' ? `1px solid #acb5bd` : `none`;
  }};
  border-radius: 1em;
  box-shadow: ${BOX_SHADOW_BUTTON};
  font-weight: 700;
  text-align: center;
  font-size: ${(props: ButtonProps) => {
    switch (props?.size) {
      case 'small':
        return '14px';
      case 'middle':
        return '20px';
      case 'large':
        return '28px';
    }
  }};
  line-height: ${(props: ButtonProps) => {
    switch (props?.size) {
      case 'small':
        return '20px';
      case 'middle':
        return '28px';
      case 'large':
        return '38px';
    }
  }};
  padding: ${(props: ButtonProps) => {
    switch (props?.size) {
      case 'small':
        return '5px 10px';
      case 'middle':
        return '12px 25px';
      case 'large':
        return '20px 70px';
    }
  }};
  width: ${(props: ButtonProps) => (props?.block ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  &&:hover {
    filter: saturate(1.3);
  }
  &&:active {
    transform: translate(1%, 1%);
  }
`;

export const StButtonCloseModal = styled(StButton)`
  position: absolute;
  top: 30px;
  right: 50px;
  background-color: initial;
  border: none;
  box-shadow: none;
  border-radius: 0;
`;

export const StButtonReply = styled(StButton)`
  padding: 5px 7px;
  height: min-content;
  margin: 0;
  font-size: 13px;
`;

export const StButtonNewTopic = styled(StButton)`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme?.BACKGROUND_COLOR_BUTTON};
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
