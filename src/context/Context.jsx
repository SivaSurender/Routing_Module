import { createContext, useContext } from "react";

export const NavigationContext = createContext();

import React from "react";

function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

const useNavigation = () => {
  return useContext(NavigationContext);
};

export { useNavigation, NavigationProvider };

export default NavigationProvider;
