import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme, THEMES } from 'styles/variables/colors-const';
import { themeService } from '../api/ThemeService';
import { userState } from '../hooks/userState';
import { getCookie, setCookie } from '../utils/cookiesManager';

interface IThemeContext {
  isDarkTheme: boolean;
  handleThemeChange?: () => void;
}

const defaultState = {
  isDarkTheme: false,
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
  cookies?: string | undefined;
}> = ({ children, cookies }) => {
  const localTheme = getCookie('theme', cookies) as Theme;

  const { user } = userState();

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    localTheme || Theme.LIGHT
  );

  useEffect(() => {
    (async () => {
      try {
        if (!localTheme && user) {
          const themeNameFromDB = await themeService.getUserTheme();
          const themeNameFromDBIsValid =
            typeof themeNameFromDB === 'string' &&
            themeNameFromDB !== currentTheme;
          if (themeNameFromDBIsValid && Theme[themeNameFromDB]) {
            console.log('устанавливаю тему из базы', themeNameFromDB);
            setCurrentTheme(themeNameFromDB);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleThemeChange = async () => {
    const theme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setCurrentTheme(theme);
    if (user) await themeService.setUserTheme({ theme_name: theme });

    setCookie('theme', theme);
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
