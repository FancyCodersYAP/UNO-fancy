import styled from 'styled-components';

export const StTopicName = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  text-decoration-line: underline;
  color: ${props => props.theme?.COLOR_ELEMENT_WARN};
  margin-bottom: 80px;
`;
