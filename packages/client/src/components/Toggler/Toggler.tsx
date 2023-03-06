import React, { FC } from 'react';
import {
  StToggle,
  StToggleControl,
  StToggleIcon,
  StToggleLabel,
  StToggleState,
  StToggleThemeIcon,
} from './style';
import AppContext from '../ContextProvider';

//TODO добавить функционал проверки пропсов для переиспользования элемента в других местах
const Toggler: FC = () => (
  <StToggleLabel className="toggle toggle_main-page">
    <AppContext.Consumer>
      {appData => (
        <>
          <StToggle
            onChange={appData.handleThemeChange}
            type="checkbox"
            className="toggle__input"
            checked={appData.themeTogglerState}
          />
        </>
      )}
    </AppContext.Consumer>
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

export default Toggler;
