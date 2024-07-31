import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });

  const setUser = user => {
    setState(prevState => ({...prevState, user}));
  };

  const toggleTheme = () => {
    setState(prevState => ({
      ...prevState,
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const value = {
    state,
    setState,
    setUser,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
