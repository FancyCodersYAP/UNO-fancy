import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { localStgMethodsObj } from 'utils/localStg';
import { THEMES } from 'styles/variables/colors-const';

interface IThemeContext {
  isChecked: boolean;
  handleThemeChange?: () => void;
}

const defaultState = {
  isChecked: false,
};

const localTheme = localStgMethodsObj.getValue();

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
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
      <ThemeProvider theme={THEMES[`${currentTheme}`]}>
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
