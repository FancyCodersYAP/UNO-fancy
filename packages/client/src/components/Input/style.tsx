import styled from 'styled-components';;

export const StInputContainer = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
  margin-top: 40px;
`;
export const StInput = styled.input`
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;
  border: 0;
  color: #808097;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;

  &:not(:placeholder-shown) ~ label,
  :focus ~ label {
    transform: translateY(-15px) translateX(10px) scale(0.75);
    color: #808097;
  }

  &:focus ~ label {
    color: #dc2f55;
  }
`;

export const StError = styled.div`
  color: white;
  padding: 5px;
  font-size: 12px;
`;

export const StLabel = styled.label`
  color: #b3b3b3;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 100%;
  transition: transform 200ms, color 200ms;
  top: 20px;
`;
