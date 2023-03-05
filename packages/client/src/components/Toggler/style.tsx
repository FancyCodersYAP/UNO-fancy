import styled from 'styled-components';

export const StToggleLabel = styled.label`
  display: inline-flex;
  position: relative;
  width: 100%;
  gap: 15px;
  justify-content: flex-end;
`;

export const StToggle = styled.input`
  position: absolute;
  outline: none;
  clip: rect(0, 0, 0, 0);

  :checked {
    & ~ .toggle__state .toggle__control {
      background: #4263ebff;
      border: 1px solid #4263ebff;
      align-items: center;
    }

    & ~ .toggle__state .toggle__icon {
      background: #ffff;
      left: 1.625em;
    }

    & ~ .toggle__theme-icon_moon {
      color: #ffff;
    }

    & ~ .toggle__theme-icon_sun {
      color: #bdacaf;
    }
  }
  :focus ~ .toggle__state .toggle__title {
    text-decoration: underline;
  }
  & ~ .toggle__theme-icon_sun {
    color: #f9f9f9;
  }
`;

export const StToggleState = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

export const StToggleControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 3.25em;
  height: 1.75em;
  border: 1px solid #acb5bdff;
  border-radius: 1em;
  cursor: pointer;
  transition: background-color 0.5s ease;
`;

export const StToggleIcon = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 1em;
  width: 1.5em;
  height: 1.5em;
  left: 0;
  transform: scale(0.9);
  background: #acb5bdff;
  transition: left 0.5s ease, background-color 0.5s ease;
`;

export const StToggleTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
  color: #818c98ff;
`;

export const StToggleThemeIcon = styled.svg`
  width: 1.5em;
  height: 1.5em;
  color: #bdacaf;
`;
