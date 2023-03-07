import styled from 'styled-components';

export const StInputContainer = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
  margin-bottom: 50px;
`;
export const StInput = styled.input`
  background-color: ${props => props?.theme.COLOR_BACKGROUND_SECONDARY};
  border-radius: 20px;
  box-sizing: border-box;
  border: 0;
  color: #803737; //TODO поменять под тему
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;

  &:not(:placeholder-shown) ~ label,
  :focus ~ label {
    transform: translateY(-15px) translateX(10px) scale(0.75);
    color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  }

  &:focus ~ label {
    color: ${props => props?.theme.COLOR_ELEMENT_WARN};
  }
`;

export const StError = styled.div`
  color: ${props => props?.theme.COLOR_TEXT_PRIMARY};
  padding: 5px;
  font-size: 12px;
  line-height: 1.2;
`;

export const StLabel = styled.label`
  color: ${props => props?.theme.COLOR_TEXT_SECONDARY};
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 100%;
  transition: transform 200ms, color 200ms;
  top: 20px;
`;
