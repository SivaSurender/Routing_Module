import React from "react";
import { useNavigation } from "./context/Context";

function Route({ path, children }) {
  const { currentPath } = useNavigation();
  return currentPath === path ? children : null;
}

export default Route;
