import styled from 'styled-components';
import { customScrollbar } from 'styles/global';
import { BACKGROUND_COLOR_OPACITY_LIGHT } from 'styles/variables/colors-const';
import Button from 'components/Button/Button';

export const StRulesTextContainer = styled.div`
  ${customScrollbar}
  overflow-y: auto;
  height: 308px;
  margin-bottom: 20px;
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  background: ${BACKGROUND_COLOR_OPACITY_LIGHT};
  border-radius: 5px;
  padding: 19px 2px 19px 19px;
  line-height: 22px;

  h3,
  p {
    margin-bottom: 20px;
  }

  h4,
  ul {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 30px;
  }

  p {
    padding-left: 15px;
  }

  a {
    border-bottom: 1px ${props => props.theme?.COLOR_TEXT_PRIMARY} solid;
    color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  }
`;

export const StMoreButton = styled(Button)`
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;

  svg {
    margin-left: 15px;
  }
`;

export const StBackButton = styled(Button)`
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;

  svg {
    transform: rotate(180deg);
    margin-right: 15px;
  }
`;
