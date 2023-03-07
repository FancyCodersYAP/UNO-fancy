import { FC } from 'react';
import {
  StToggle,
  StToggleControl,
  StToggleIcon,
  StToggleLabel,
  StToggleState,
  StToggleThemeIcon,
} from './style';
import { useThemeContext } from 'contexts/ThemeContext';

//TODO добавить функционал проверки пропсов для переиспользования элемента в других местах
const Toggler: FC = () => {
  const { handleThemeChange, themeTogglerState } = useThemeContext();

  return (
    <StToggleLabel className="toggle toggle_main-page">
      <StToggle
        onChange={handleThemeChange}
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
