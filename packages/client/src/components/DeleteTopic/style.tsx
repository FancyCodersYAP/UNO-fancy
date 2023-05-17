import styled from 'styled-components';

export const StDeleteTopicFrom = styled.form``;

export const StDeleteTopicWrapper = styled.div`
  position: relative;
`;

export const StTopicName = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  text-decoration-line: underline;
  color: ${props => props.theme?.COLOR_ELEMENT_WARN};
  margin-bottom: 80px;
`;

export const StDeleteError = styled.p`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: ${props => props.theme?.COLOR_ELEMENT_WARN};
  filter: opacity(80%);
`;
