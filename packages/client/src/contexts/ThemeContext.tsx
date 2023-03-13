import React, { useContext, useState } from 'react';
import * as light from 'styles/variables/colors-theme-light';
import * as dark from 'styles/variables/colors-theme-dark';
import { ThemeProvider } from 'styled-components';
import { localStgMethodsObj } from 'utils/global';

interface IThemeContext {
  isChecked: boolean;
  handleThemeChange?: () => void;
}

const defaultState = {
  isChecked: false,
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const localTheme = localStgMethodsObj.getValue();
  const themes: Record<string, any> = { light, dark };
  const [currentTheme, setCurrentTheme] = useState(localTheme || 'light');

  const handleThemeChange = () => {
    const theme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(theme);
    localStgMethodsObj.addValue(theme);
  };

  const providerValue = {
    isChecked: currentTheme === 'dark',
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeProvider theme={themes[`${currentTheme}`]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeContext is unavailable');
  }

  return context;
};
