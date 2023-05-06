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

  const navigateHandler = (toPath) => {
    window.history.pushState({}, "", toPath);
    setCurrentPath(toPath);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

const useNavigation = () => {
  return useContext(NavigationContext);
};

export { useNavigation, NavigationProvider };

export default NavigationProvider;
