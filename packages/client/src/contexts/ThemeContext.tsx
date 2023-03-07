import React, { useContext, useState } from 'react';
import * as light from 'styles/variables/colors-theme-light';
import * as dark from 'styles/variables/colors-theme-dark';
import { ThemeProvider } from 'styled-components';

interface IThemeContext {
  themeTogglerState: boolean;
  handleThemeChange?: () => void;
}

const defaultState = {
  themeTogglerState: false,
};

const localStgMethodsObj = {
  getValue(): string | null {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  },
  addValue(value: string): void {
    localStorage.setItem('theme', value);
  },
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const localTheme = localStgMethodsObj.getValue();
  const themes: Record<string, any> = { light: light, dark: dark };
  const [selectedTheme, setSelectedTheme] = useState<string>(
    localTheme || 'light'
  );
  const [themeTogglerState, setThemeTogglerState] = useState<boolean>(
    localTheme === 'dark'
  );

  const handleThemeChange = () => {
    const theme = selectedTheme === 'dark' ? 'light' : 'dark';
    setSelectedTheme(theme);
    setThemeTogglerState(!themeTogglerState);
    localStgMethodsObj.addValue(theme);
  };

  const providerValue = {
    themeTogglerState,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeProvider theme={themes[`${selectedTheme}`]}>
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
