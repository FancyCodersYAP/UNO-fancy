import React from 'react';

interface IThemeContext {
  themeTogglerState: boolean;
  handleThemeChange?: () => void;
}

const defaultState = {
  themeTogglerState: false,
};

const AppContext = React.createContext<IThemeContext>(defaultState);

export default AppContext;
