import styled from 'styled-components';
import { customScrollbar } from 'styles/global';

export const StRulesTextContainer = styled.div`
  ${customScrollbar}
  overflow-y: auto;
  height: 308px;
  margin-bottom: 20px;
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  background: rgba(255, 255, 255, 0.16);
  border-radius: 5px;
  padding: 19px 2px 19px 19px;

  h3,
  h4,
  p,
  ul {
    margin: 0;
  }

  h3 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 10px;
  }

  ul {
    margin-bottom: 10px;
  }

  a {
    color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  }
`;
