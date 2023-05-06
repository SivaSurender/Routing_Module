import { createContext, useContext, useEffect, useState } from "react";

export const NavigationContext = createContext();

import React from "react";

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const listenHandler = function () {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", listenHandler);

    // cleanup

    window.removeEventListener("popstate", listenHandler);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPath, setCurrentPath }}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

const useNavigation = () => {
  return useContext(NavigationContext);
};

export { useNavigation, NavigationProvider };

export default NavigationProvider;
