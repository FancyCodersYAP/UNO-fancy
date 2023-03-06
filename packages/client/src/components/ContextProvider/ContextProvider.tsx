import React from 'react';

interface IThemeContext {
  themeTogglerState: boolean;
  handleThemeChange?: () => void;
}

type TContext = {
  data: IThemeContext;
  children: React.ReactNode;
};
const defaultState = {
  themeTogglerState: false,
};

const AppContext = React.createContext<IThemeContext>(defaultState);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function contextProvider({ data, children }: TContext) {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppContext;
