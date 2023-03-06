import React from 'react';

// @ts-ignore
const AppContext = React.createContext(); //требует чтобы я данные какие-то предоставил
function contextProvider({ value, children }: Record<any, React.ReactNode>) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
