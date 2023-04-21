import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { localStgMethodsObj } from 'utils/localStg';
import { Theme, THEMES } from 'styles/variables/colors-const';
import { themeService } from '../api/ThemeService';

interface IThemeContext {
  isDarkTheme: boolean;
  handleThemeChange?: () => void;
}

const defaultState = {
  isDarkTheme: false,
};

const localTheme = localStgMethodsObj.getValue('theme') as Theme;

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    localTheme || Theme.LIGHT
  );

  const handleThemeChange = async () => {
    const theme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setCurrentTheme(theme);
    localStgMethodsObj.addValue('theme', theme);
    await themeService.setUserTheme({ theme_name: theme });
  };

  const providerValue = {
    isDarkTheme: currentTheme === Theme.DARK,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeProvider theme={THEMES[currentTheme]}>{children}</ThemeProvider>
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
