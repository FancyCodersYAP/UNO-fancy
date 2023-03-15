import styled from 'styled-components';
import * as COLORS from 'styles/variables/colors-const';

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
      background-color: ${COLORS.COLOR_ELEMENT_MAIN};
      border: 1px solid ${COLORS.COLOR_ELEMENT_MAIN};
      align-items: center;
    }

    & ~ .toggle__state .toggle__icon {
      background: ${COLORS.COLOR_ELEMENT_CONTRAST};
      left: 1.625em;
    }

    & ~ .toggle__theme-icon_moon {
      color: ${COLORS.COLOR_ELEMENT_CONTRAST};
    }

    & ~ .toggle__theme-icon_sun {
      color: ${COLORS.COLOR_ICON_REGULAR};
    }
  }

  :focus ~ .toggle__state .toggle__title {
    text-decoration: underline;
  }

  & ~ .toggle__theme-icon_sun {
    color: ${COLORS.COLOR_ELEMENT_CONTRAST};
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
  width: 3.25em;
  height: 1.75em;
  border: 1px solid ${COLORS.COLOR_ELEMENT_ALTERNATE};
  border-radius: 1em;
  cursor: pointer;
  transition: background-color 0.5s ease;
`;

export const StToggleIcon = styled.div`
  position: relative;
  border-radius: 1em;
  width: 1.5em;
  height: 1.5em;
  left: 0;
  transform: scale(0.9);
  background: ${COLORS.COLOR_ELEMENT_ALTERNATE};
  transition: left 0.5s ease, background-color 0.5s ease;
`;

export const StToggleTitle = styled.div`
  // пока не используется
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
  color: ${COLORS.COLOR_ELEMENT_ALTERNATE};
`;

export const StToggleThemeIcon = styled.svg`
  width: 1.5em;
  height: 1.5em;
  color: ${COLORS.COLOR_ICON_REGULAR};
`;
