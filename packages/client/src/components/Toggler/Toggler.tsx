import React, { FC } from 'react';
import {
  StToggle,
  StToggleControl,
  StToggleIcon,
  StToggleLabel,
  StToggleState,
  StToggleThemeIcon,
} from './style';

type TogglerProp = {
  onChange: () => void;
  themeTogglerState?: boolean;
};

const Toggler: FC<TogglerProp> = ({ onChange, themeTogglerState }) => {
  return (
    <StToggleLabel className="toggle toggle_main-page">
      <StToggle
        onChange={onChange}
        type="checkbox"
        className="toggle__input"
        checked={themeTogglerState}
      />
      <StToggleThemeIcon className="toggle__theme-icon toggle__theme-icon_sun">
        <use href="src/assets/icons/icons_sprite.svg#theme-toggle-sun"></use>
      </StToggleThemeIcon>
      <StToggleState className="toggle__state">
        <StToggleControl className="toggle__control">
          <StToggleIcon className="toggle__icon" />
        </StToggleControl>
      </StToggleState>
      <StToggleThemeIcon className="toggle__theme-icon toggle__theme-icon_moon">
        <use href="src/assets/icons/icons_sprite.svg#theme-toggle-moon"></use>
      </StToggleThemeIcon>
    </StToggleLabel>
  );
};

export default Toggler;
